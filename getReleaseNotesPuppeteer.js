const puppeteer = require('puppeteer');
const process = require("process")
let s_browser = null;

async function openUrl(url) {
    let page;
    try {
        page = await s_browser.newPage();

        // 设置合理的超时时间
        await page.setDefaultNavigationTimeout(30000);
        
        console.log(`page.goto ${url}`)
        const response = await page.goto(url, {
            waitUntil: 'domcontentloaded',
            timeout: 30000
        });
        
        try {
            console.log(`wait for Navigation begin `); 
            await page.waitForNavigation();
            console.log(`wait for Navigation end `); 
        } catch (e) {
            console.log(`wait for Navigation exception catched `);
        }
        
        // 查找包含 "Release notes" 的 h3 元素
        const h3Elements = await page.$$('h3');
        let targetH3 = null;

        for (const h3 of h3Elements) {
            const text = await page.evaluate(el => el.textContent, h3);
            if (text.includes('Release notes')) {
                targetH3 = h3;
                break;
            }
        }

        if (!targetH3) {
            console.log("Can't find 'Release notes' h3 element");
            return null;
        }

        console.log("click targetH3")
        // 点击目标 h3 元素
        await targetH3.click();

        console.log("waitForSelector .my-12")
        
        // 等待目标内容加载
        await page.waitForSelector('.my-12', {
            timeout: 10000,
            visible: true
        });

        console.log("get .my-12")
        
        // 获取 .my-12 元素的 HTML 内容
        const element = await page.$('.my-12');
        if (!element) {
            throw new Error('Element with class "my-12" not found');
        }

        const htmlContent = await page.evaluate(el => el.innerHTML, element);
        return htmlContent;

    } catch (error) {
        console.error(`Error in openUrl for ${url}:`, error);
        throw error; // 重新抛出错误，让调用者处理
    } finally {
        if (page) {
            await page.close().catch(e => console.error('Error closing page:', e));
        }
    }
}

async function getReleaseNotesPuppeteer(url) {
    if (!s_browser) {
        console.log(`getReleaseNotesPuppeteer platform = ${process.platform}`)
        if(process.platform == 'darwin'){
            s_browser =  await puppeteer.launch({
                executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",// chrome://version/
                headless: false, devtools: true, args: [//"--user-data-dir=/Users/mario/Library/Application Support/Google/Chrome/Default", // chrome://version/
                    "--user-data-dir=./Chrome_Default", // chrome://version/
                    "--profile-directory=Profile 8"],
            });
        } else if (process.platform == "linux") {
            s_browser = await puppeteer.launch({
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
                executablePath: process.env.PUPPETEER_EXEC_PATH, // set by docker container
                headless: false,
            });
        }
    }
    return await openUrl(url);
}

module.exports = getReleaseNotesPuppeteer;