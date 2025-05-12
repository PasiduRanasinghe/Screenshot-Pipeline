import puppeteer from "puppeteer-core";

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath:
      process.env.PUPPETEER_EXECUTABLE_PATH || "/usr/bin/google-chrome",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto("https://PasiduRanasinghe.github.io/Screenshot-Pipeline", {
    waitUntil: "networkidle2",
  });
  await page.screenshot({ path: "screenshot.png", fullPage: true });
  await browser.close();
})();
