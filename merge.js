const fs = require('fs').promises;
const path = require('path');
const cheerio = require('cheerio');
const TurndownService = require('turndown');

async function getReleaseNotes(directoryPath,resultFileName) {
  console.log(`getReleaseNotes ${resultFileName}`);

  const files = await fs.readdir(directoryPath);

  const htmlFiles = files.filter(file => file.endsWith('.html')).sort((a, b) => {
    const versionA = parseInt(a.match(/(\d+)\.html/)[1]);
    const versionB = parseInt(b.match(/(\d+)\.html/)[1]);
    return versionB - versionA;
  });

  let content = "";//'# Unity Release Notes\n\n';

  for (const file of htmlFiles) {
    const filePath = path.join(directoryPath, file);
    console.log(`Processing release notes in file: ${file}`);

    const fileContent = await fs.readFile(filePath, 'utf8');
    const $ = cheerio.load(fileContent); 

    //const $releaseNotes = $('.release-notes');
    const $releaseNotes = $.root();
    
    function removeNodes(regPattern)
    {
      $releaseNotes.find('h1, h2, h3, h4, h5, h6').each((index, element) => {
        let headerText = $(element).text();
        if (headerText.match(regPattern)) {
          $(element).nextAll().remove();
          $(element).remove();
        }
      });
    }

    removeNodes(/System Requirements/i)
    removeNodes(/Package changes in \w+/i)
    removeNodes(/Packages updated/i)


    const releaseNotesHTML = $releaseNotes.html();

    const turndownService = new TurndownService();
    const html = releaseNotesHTML;
    const markdown = turndownService.turndown(html);

    //console.log(markdown);

    /*
    content += `<html>\n\n
                  <head></head>\n\n
                  <body>\n\n
                  ${releaseNotesHTML}\n\n
                  </body>\n\n
                  </html>`;
                  */
    content += `${markdown}\n\n`;
}

  await fs.writeFile(`merge_htmls/${resultFileName}`, content);
  console.log('ReadMe.md has been successfully created.');
}

module.exports = getReleaseNotes;