const scrapeUnityReleaseNotes = require('./unityScraper');
const getReleaseNotes = require('./merge');
const generateSortedUnityVersionsLinksTable = require('./genReadMe');
const fs = require('fs').promises;
const {closePuppeteer} = require('./getReleaseNotesPuppeteer')

var unityVersions = 
[
    "5.0",
    "5.1",
    "5.2",
    "5.3",
    "5.4",
    "5.5",
    "5.6",
    "2017.1",
    "2017.2",
    "2017.3",
    "2017.4",
    "2018.1",
    "2018.2",
    "2018.3",
    "2018.4",
    "2019.1",
    "2019.2",
    "2019.3",
    "2019.4",
    "2020.1",
    "2020.2",
    "2020.3",
    "2021.1",
    "2021.2",
    "2021.3",
    "2022.1",
    "2022.2",
    "2022.3",
    "2023.1",
    "2023.2",
    "6000.0",
    "6000.1",
    "6000.2",
    "6000.3",
]

async function main()
{
    for(var i = 0;i < unityVersions.length;++i){
        var prefix = unityVersions[i] + ".";
        const htmlsDirectory = 'tmp/htmls_' + prefix;
        await scrapeUnityReleaseNotes(undefined, htmlsDirectory, prefix);
        await getReleaseNotes(htmlsDirectory,prefix + "md");
    }

    const table = await generateSortedUnityVersionsLinksTable(unityVersions);
    await fs.writeFile('README.md', table);
    await closePuppeteer();
}



(async() => {
    console.log('start main.js');
  
    await main()

    console.log('end main.js');

  })();
