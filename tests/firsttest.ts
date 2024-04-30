import { chromium } from "@playwright/test";

(async () => {
  //Creating the browser instance
  const browser = await chromium.launch({
    headless: false,
  });

  // Browser Instance
  const browserInstance = await browser.newContext();
  // Page

  const page = await browserInstance.newPage();

  // navigate google

  await page.goto("https://www.google.com/");
})();
