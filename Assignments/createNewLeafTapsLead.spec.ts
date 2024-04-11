import { expect, test } from "@playwright/test";

test("Create New Lead", async ({ page }) => {

    // CONSTANTS
    const APP_URL = 'http://leaftaps.com/opentaps/control/main'
    const COMPANY_NAME = 'TESTLEAF'
    const FIRST_NAME = 'FIRSTNAME'
    const LAST_NAME = 'LASTNAME'

    // STEP 1: Navigate to the URL
    await page.goto(APP_URL);

    // STEP 2: Enter the Username and Password and Click on 'Login' button
    await page.getByLabel("Username").fill("Demosalesmanager");
    await page.getByLabel("Password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();

    // VALIDATE THE 'WELCOME' MESSAGE IS DISPLAYED
    await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible()

    // STEP 3: Click CRM/SFA
    await page.getByRole('link', { name: 'CRM/SFA' }).click()

    // STEP 4: Click 'Leads' and Click 'Create Lead'
    await page.locator("a[href*='leadsMain']").click()
    await page.locator("a[href*='createLeadForm']").click()

    // STEP 5: FILL THE FORM AND CLICK ON 'SUBMIT' BUTTON
    await page.locator('td input[name="companyName"]').fill(COMPANY_NAME)
    await page.locator('td input[name="firstName"]').fill(FIRST_NAME)
    await page.locator('td input[name="lastName"]').fill(LAST_NAME)
    await page.locator('td input[name="personalTitle"]').fill('Mr.')
    await page.locator('td input[name="generalProfTitle"]').fill('Automation Expert')
    await page.locator('td input[name="annualRevenue"]').fill('145000')
    await page.locator('td input[name="departmentName"]').fill('QA')
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('3476715800')

    await page.locator('[name="submitButton"]').click()

    // WAIT UNTIL THE TITLE BAR IS LOADED
    await expect(page.locator('.titleBar')).toBeAttached()

    // STEP 6: Verify the company name, first name, last name and the status

    await expect(page.locator("#viewLead_companyName_sp")).toContainText(COMPANY_NAME)
    expect(await page.locator("#viewLead_companyName_sp").textContent()).toContain(COMPANY_NAME)

    await expect(page.locator("#viewLead_firstName_sp")).toContainText(FIRST_NAME)
    expect(await page.locator("#viewLead_firstName_sp").textContent()).toContain(FIRST_NAME)

    await expect(page.locator("#viewLead_lastName_sp")).toContainText(LAST_NAME)
    expect(await page.locator("#viewLead_lastName_sp").textContent()).toContain(LAST_NAME)

    expect(page.locator("#viewLead_statusId_sp")).not.toBeNull()
    await expect(page.locator("#viewLead_statusId_sp")).toHaveText('Assigned')

    // DISPLAY THE LEAD NUMBER 
    const compNameLead= await page.locator('#viewLead_companyName_sp').textContent()
    const leadNumber = compNameLead?.split('(')[1].split(')')[0]
    console.log("The New Lead Number --> ", leadNumber);
    

})
