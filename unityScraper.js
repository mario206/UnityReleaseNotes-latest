const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
const sleep = require('util').promisify(setTimeout);
const getReleaseNotesPuppeteer = require('./getReleaseNotesPuppeteer')

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

  let htmlContent = await getReleaseNotesPuppeteer(url);
  if (htmlContent != null) {
    await fs.writeFile(filePath, htmlContent,'utf-8');

    console.log(`Unity ${prefix}${latestVersion} release notes have been saved to ${filePath}.`);

    // Log response details
    console.log('--- Request successful ---');
    console.log(`URL: ${url}`);

    // 休眠5秒
    console.log('Waiting 5 seconds before scraping the next version...');
    await sleep(2000);

    // 递归调用
    await scrapeUnityReleaseNotes(undefined, directoryPath, prefix);
  }
}



module.exports = scrapeUnityReleaseNotes;