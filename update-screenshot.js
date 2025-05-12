import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"], });
  const page = await browser.newPage();
  await page.goto("https://PasiduRanasinghe.github.io/Screenshot-Pipeline", {
    waitUntil: "networkidle2",
  });
  await page.screenshot({ path: "screenshot.png", fullPage: true });
  await browser.close();
})();
