const { test, expect } = require('@playwright/test');
// const testData = require("../../fixtures/Login.Fixtures.json");

test.beforeEach(async({page})=>{
    await page.goto('https://www.pinterest.com/')
    // await page.goto("./");
});


test('has title', async ({ page }) => {
  
    // Expect a title "to contain" a substring.
    
    await expect(page).toHaveTitle('Pinterest');
});

test.only('Display Login Form', async ({ page }) => {
    await page.locator('//div[contains(@class, "tBJ dyH iFc sAJ B1n tg7 H2s") and text()="Log in"]').click();
    await page.waitForSelector('//div[@class="zI7 iyn Hsu"]/following::h1[text()="Welcome to Pinterest"]')
    await expect(page.locator('//div[@class="zI7 iyn Hsu"]/following::h1')).toHaveText("Welcome to Pinterest");
});

test.only('Directs to ideas board', async ({ page }) => {

    await page.getByPlaceholder('Email').fill('nickymaharjan2003@gmail.com');
    await page.getByPlaceholder('Password').fill('Nicky9880367728');
    await page.locator('//div[contains(@class, "tBJ") and contains(@class, "dyH") and contains(@class, "iFc") and contains(@class, "sAJ") and contains(@class, "B1n") and contains(@class, "tg7") and contains(@class, "H2s") and text()="Log in"]').click();
    
    await expect(page.locator('//h3[@class="lH1 dyH iFc H2s bwj X8m tg7 IZT"]')).toHaveText("Ideas for your board");


});