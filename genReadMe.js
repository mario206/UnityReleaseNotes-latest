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
  // 获取本地时间与 UTC 时间的分钟差
  const timezoneOffsetInMinutes = current.getTimezoneOffset();
  // 将本地时间根据 UTC 时间和目标时区得到 UTC+8 时间
  const utcPlus8OffsetInMinutes = -8 * 60; // UTC+8 时区值
  const targetOffsetInMinutes = timezoneOffsetInMinutes - utcPlus8OffsetInMinutes;
  const targetTimestamp = current.getTime() + targetOffsetInMinutes * 60000;
  const targetDate = new Date(targetTimestamp);

  const year = targetDate.getFullYear();
  const month = String(targetDate.getMonth() + 1).padStart(2, '0');
  const day = String(targetDate.getDate()).padStart(2, '0');
  const hours = String(targetDate.getHours()).padStart(2, '0');
  const minutes = String(targetDate.getMinutes()).padStart(2, '0');
  const seconds = String(targetDate.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


async function generateSortedUnityVersionsLinksTable(unityVersions) {
  const sortedUnityVersions = unityVersions.sort(versionNumberCompare);
  const rows = Math.ceil(sortedUnityVersions.length / 5);
  let table = "# UnityReleaseNotes\n"
  table += `**Last update time : \`${getCurrentFormattedTime()}\`\tPowered By ChatGPT**\n\n`
  table += `## More Unity Versions \n`
  var columns = 9;
  for(var i = 0;i < columns;++i)
  {
    table += "|&emsp;" //todo
  }
  table += "|\n";

  for(var i = 0;i < columns;++i)
  {
    table += "|:-" 
  }
  table += "|\n";

  var end = false;
  for (let i = 0; i < rows; i++) {
    let row = '';
    for (let j = 0; j < columns; j++) {
      const index = i * columns + j;
      if (index < sortedUnityVersions.length) {
        const version = sortedUnityVersions[index];
        const link = `./merge_htmls/${version}.md`;
        if(j == 0)
        {
          row += "|";
        }
        row += ` [${version}](${link}) |`;
      } else {
        if(j == 0) {
          end = true
          break
        }
        else {
          row += ' |';
        }
      }
    }
    if(!end)
    {
      table += row + '\n';
    }
  }

  var version = "6000.1";

  //var filePath = `./merge_htmls/${sortedUnityVersions[0]}.md`;
  var filePath = `./merge_htmls/${version}.md`;
  const fileContent = await fs.readFile(filePath, 'utf8');

  table += `\n## ${version}\n\n`
  table += fileContent;

  return table;
}

module.exports = generateSortedUnityVersionsLinksTable;