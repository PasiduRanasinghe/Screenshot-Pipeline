import puppeteer from 'puppeteer';
 (async () => {
    const browser = await puppeteer.lunch({headless:true});
    const page = await browser.newPage();
    await page.goto('https://PasiduRanasinghe.github.io/Screenshot-Pipeline');
    await page.screenshot({path:'screenshot.png', fullPage:true});
    await browser.close();
 })