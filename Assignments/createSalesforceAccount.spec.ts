import { expect, test } from "@playwright/test";
import { timeStamp } from "console";
import exp from "constants";

test("Create New Salesforce Account", async ({ page }) => {
  // CONSTANTS
  const APP_URL = 'https://login.salesforce.com'
  const PAGE_TITLE = "Home | Salesforce";
  const PAGE_URL =
    "https://testleaf-e9-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home";
  const APP_NAME = "Service";
  const ACCOUNT_NAME = 'ACT_' + Date.now()

  // STEP 1: Navigate to the Salesforce URL
  await page.goto(APP_URL);

  // STEP 2: WAIT UNTIL THE SALESFORCE LOGO IS VISIBLE
  await expect(page.getByAltText("Salesforce")).toBeVisible();

  // STEP 3: Enter the Username and Password using getByLabel() and Click on 'Login' button
  await page.getByLabel("Username").fill("chiranjeevi.heggade@gmail.com");
  await page.getByLabel("Password").fill("Test@2024");
  await page.locator("#Login").click();

  // STEP 4: WAIT UNTIL THE PAGE IS COMPLETELY LOADED
  await page.waitForLoadState("load");
  await page.waitForSelector('.slds-icon-waffle')

  // STEP 5: VERIFY THE TITLE AND URL OF THE PAGE
  await expect(page).toHaveTitle(PAGE_TITLE);
  await expect(page).toHaveURL(PAGE_URL);

  // STEP 6: Click App Launcher using the class locator
  await page.locator(".slds-icon-waffle").click();

  // STEP 7: Click 'View All' using getByText
  await page.getByText("View All").click();

  // STEP 8: Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
  await expect(page.locator('div.al-modal-container')).toBeAttached()
  await page.getByPlaceholder("Search apps or items...").fill(APP_NAME)

  // STEP 9: Click Service using index based XPath
  await page.locator('//div[@role="application"]/one-app-launcher-app-tile//a').nth(0).click()

  // STEP 10: Click Accounts using attribute based CSS selector
  await page.waitForLoadState("load");
  await page.locator('a[title="Accounts"]').click();

  // STEP 11: Click 'New' using getByRole
  await page.getByRole("button", { name: "New" }).click();

  // STEP 12: Enter Account name using attribute based CSS Selector
  await page.locator("input[name='Name']").fill(ACCOUNT_NAME)

  // STEP 13: Click 'Save' button using XPath
  await page.locator("//button[@name='SaveEdit']").click()

  // STEP 14: Verify the toast message displayed
  await expect(page.locator('div[role="alertdialog"]')).toBeVisible()
  await expect(page.locator('div[role="alertdialog"]')).toContainText('SuccessAccount')
});