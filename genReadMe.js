const fs = require('fs').promises;

function versionNumberCompare(a, b) {
  const splitA = a.split('.');
  const splitB = b.split('.');

  const majorA = parseInt(splitA[0]);
  const majorB = parseInt(splitB[0]);

  if (majorA !== majorB) {
    return majorB - majorA;
  }

  const minorA = splitA[1] ? parseInt(splitA[1]) : 0;
  const minorB = splitB[1] ? parseInt(splitB[1]) : 0;

  return minorB - minorA;
}


function getCurrentFormattedTime() {
  const current = new Date();
  const year = current.getFullYear();
  const month = String(current.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(current.getDate()).padStart(2, '0');
  const hours = String(current.getHours()).padStart(2, '0');
  const minutes = String(current.getMinutes()).padStart(2, '0');
  const seconds = String(current.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


async function generateSortedUnityVersionsLinksTable(unityVersions) {
  const sortedUnityVersions = unityVersions.sort(versionNumberCompare);
  const rows = Math.ceil(sortedUnityVersions.length / 5);
  let table = "# UnityReleaseNotes\n"
  table += `**Last update time : ${getCurrentFormattedTime()} Powered By ChatGPT**\n`

  table += '|-|-|-|-|-|\n|:-:|:-:|:-:|:-:|:-:|\n';

  for (let i = 0; i < rows; i++) {
    let row = '|';
    for (let j = 0; j < 5; j++) {
      const index = i * 5 + j;
      if (index < sortedUnityVersions.length) {
        const version = sortedUnityVersions[index];
        const link = `./merge_htmls/${version}.html`;
        row += ` [${version}](${link}) |`;
      } else {
        row += ' |';
      }
    }
    table += row + '\n';
  }

  var filePath = `./merge_htmls/${sortedUnityVersions[0]}.html`;
  const fileContent = await fs.readFile(filePath, 'utf8');

  table += fileContent;

  return table;
}

module.exports = generateSortedUnityVersionsLinksTable;