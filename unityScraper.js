const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
const sleep = require('util').promisify(setTimeout);

async function createDirectoryIfNotExist(directoryPath) {
  try {
    await fs.access(directoryPath);
    console.log(`Directory "${directoryPath}" exists.`);
  } catch {
    await fs.mkdir(directoryPath);
    console.log(`Directory "${directoryPath}" created.`);
  }
}

async function getLatestDownloadedVersion(directoryPath, prefix = '2020.3.') {
  try {
    const files = await fs.readdir(directoryPath);
    const versions = files.map((file) => {
      const match = file.match(new RegExp(`${prefix.replace(/\./g, '\\.')}(\\d+)\.html`));
      return match ? parseInt(match[1], 10) : -1;
    });

    const maxVersion = Math.max(...versions);
    const normalizedMaxVersion = maxVersion === -Infinity ? -1 : maxVersion;

    console.log(`Directory "${directoryPath}" read. Max version found: ${normalizedMaxVersion === -1 ? 'None' : prefix + normalizedMaxVersion}`);
    return normalizedMaxVersion;
  } catch (error) {
    console.error(`Error reading directory: ${directoryPath}`);
    throw error;
  }
}

async function scrapeUnityReleaseNotes(startVersion, directoryPath = 'htmls', prefix = '2020.3.') {
  await createDirectoryIfNotExist(directoryPath);
  const latestVersion = startVersion === undefined ? await getLatestDownloadedVersion(directoryPath, prefix) + 1 : startVersion;
  
  console.log(`Starting web scraping from Unity version ${prefix}${latestVersion}`);
  const url = `https://unity.com/releases/editor/whats-new/${prefix}${latestVersion}`;
  const filename = `${prefix}${latestVersion}.html`;
  const filePath = path.join(directoryPath, filename);

  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      await fs.writeFile(filePath, response.data);
      console.log(`Unity ${prefix}${latestVersion} release notes have been saved to ${filePath}.`);

      // Log response details
      console.log('--- Request successful ---');
      console.log(`URL: ${url}`);

      // 休眠5秒
      console.log('Waiting 5 seconds before scraping the next version...');
      await sleep(2000);

      // 递归调用
      scrapeUnityReleaseNotes(undefined, directoryPath, prefix);
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log(`Unity release notes have been scraped up to version ${prefix}${latestVersion - 1}.`);
    } else {
      console.log(`Error: ${error.message}`);
    }

    // Log error details
    console.error('--- Request error ---');
    console.error(`URL: ${url}`);
    if (error.response) {
      console.error(`Status: ${error.response.status}`);
      console.error(`StatusText: ${error.response.statusText}`);
      console.error('Headers:', error.response.headers);
      console.error('Data:', error.response.data);
    }
    await sleep(1000);
  }
}

module.exports = scrapeUnityReleaseNotes;