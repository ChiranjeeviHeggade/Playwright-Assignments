import { chromium, test } from "@playwright/test";

test("Login to Salesforce", async () => {
  // STEP 1: Launch Chromium in non-headless mode
  const browser = await chromium.launch({ headless: false });

  // STEP 2: Create a new browser context
  const browserContext = await browser.newContext();

  // STEP 3: Open a new page within the browser context
  const page = await browserContext.newPage();

  // STEP 4: Load the Salesforce URL
  await page.goto("https://login.salesforce.com");

  // STEP 5: Enter the Salesforce Credentials and Click on 'Login' button
  await page.locator("#username").fill("chiranjeevi.heggade@gmail.com");
  await page.locator("#password").fill("Test@2024");
  await page.locator("#Login").click();

  // STEP 6: Wait for 10 seconds
  await page.waitForTimeout(10000);

  // STEP 7: Print the page title and the current url of the page
  console.log("The Title of the Page - ", await page.title());

  const url = page.url();
  console.log(`The URL of the Page - ${url}`);

  // STEP 8: Close the browser
  await browser.close();
});
