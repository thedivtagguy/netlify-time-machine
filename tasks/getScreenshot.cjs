const puppeteer = require('puppeteer');
const fs = require('fs');
const GIFEncoder = require('gifencoder');



// Function to take a screenshot of all links in an array of links
// and save them to the specified directory
//
// @param {Array} links - Array of links to screenshot
// @param {String} directory - Directory to save screenshots to
// @param {String} filename - Filename to save screenshots as
// @param {String} extension - Extension to save screenshots as


const getScreenshot = async (links, directory, filename, extension) => {
    // If the directory doesn't exist, create it
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }

    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
    });
    
    for (let i = 0; i < links.length; i++) {
        await page.goto(links[i]);
        await page.screenshot({
        path: `${directory}/${filename}${i}.${extension}`,
       // viewport size
       fullPage: false,
        });
        console.log(`${filename}${i}.${extension} saved`);
    }
    
    await browser.close();
    }



// Export this to be used in other files
module.exports = getScreenshot;