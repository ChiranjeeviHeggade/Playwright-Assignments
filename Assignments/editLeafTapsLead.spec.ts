import { expect, test } from "@playwright/test";

test("Edit Lead", async ({ page }) => {

    // CONSTANTS
    const APP_URL = 'http://leaftaps.com/opentaps/control/main'
    const COMPANY_NAME = 'EDITCOMPANYNAME'
    const FIRST_NAME = 'FIRSTNAME'
    const ANNUAL_REVENUE = '200000'
    const DEPARTMENT = 'EDITDEPARTMENTNAME'

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

    // STEP 4: Click 'Leads' and Click 'Find Leads'
    await page.locator("a[href*='leadsMain']").click()
    await page.locator("a[href*='findLeads']").click()

    // STEP 5: Enter the first name
    await page.locator('.x-tab-panel input[name="firstName"]').fill(FIRST_NAME)

    // STEP 6: CLICK ON 'FIND LEADS' BUTTON
    await page.getByRole('button', { name: 'Find Leads' }).click()

    // STEP 7: Click the first resulting Lead ID
    await page.locator('tbody td a.linktext').nth(0).click()

    // WAIT UNTIL THE TITLE BAR IS LOADED
    await expect(page.locator('.titleBar')).toBeAttached()

    // STEP 8: CLICK EDIT AND MODIFY THE DATA AND CLICK ON 'UPDATE BUTTON'
    await page.getByRole('link', { name: 'Edit', exact: true }).click()

    // WAIT UNTIL THE TITLE BAR IS LOADED
    await expect(page.locator('.titleBar')).toBeAttached()

    // STEP 9: EDIT THE INPUT FIELDS AND CLICK ON 'SUBMIT' BUTTON
    await page.locator('td input[name="companyName"]').fill(COMPANY_NAME)
    await page.locator('td input[name="annualRevenue"]').fill(ANNUAL_REVENUE)
    await page.locator('td input[name="departmentName"]').fill(DEPARTMENT)
    await page.locator('#updateLeadForm_description').fill('TEST LEAF ASSIGNMENT')

    await page.locator('.smallSubmit').first().click()

    // WAIT UNTIL THE TITLE BAR IS LOADED
    await expect(page.locator('.titleBar')).toBeAttached()

    // STEP 10: Verify the edited fields using appropriate assertions
    await expect(page.locator("#viewLead_companyName_sp")).toContainText(COMPANY_NAME)
    expect(await page.locator("#viewLead_companyName_sp").textContent()).toContain(COMPANY_NAME)

    await expect(page.locator("#viewLead_departmentName_sp")).toContainText(DEPARTMENT)
    expect(await page.locator("#viewLead_departmentName_sp").textContent()).toContain(DEPARTMENT)

    // Eliminating the Special Symbols from the returned String and converting it to Integer and Pass it to assertion .toBe() method
    let annualRevInStr = await page.locator("#viewLead_annualRevenue_sp").textContent()
    let annualRevInStrNew
    annualRevInStrNew = annualRevInStr?.replace(/[$,]/g,'')
    let annualRevInt = parseInt(annualRevInStrNew)    
    expect(annualRevInt).toBe(parseInt(ANNUAL_REVENUE))

})
