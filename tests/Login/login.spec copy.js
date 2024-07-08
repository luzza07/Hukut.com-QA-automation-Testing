const { test, expect } = require('@playwright/test');
const testData = require("../../fixtures/Login.Fixtures.json");

test.beforeEach(async({page})=>{
    // await page.goto('https://authenticationtest.com/simpleFormAuth/')
    await page.goto("./");
});

test.describe('Positive Scenario',()=>{
test('has title', async ({ page }) => {
  
    // Expect a title "to contain" a substring.
    
    await expect(page).toHaveTitle(/Authentication Test/);
});

test.only('Valid Email Address and Password Login test', async ({ page }) => {

    await page.getByPlaceholder('E-mail Address').fill(testData.validUser.email);
    await page.getByPlaceholder('Password').fill(testData.validUser.password);
    await page.locator('input[type="submit"]').click();
    
    await expect(page.locator('h1')).toHaveText("Login Success");


});
});

test.describe('Negative Scenario',() =>{
    test.only('Invalid Email Address Login test', async ({ page }) => {

        await page.getByPlaceholder('E-mail Address').fill(testData.invalidUser.invalidEmail.email);
        await page.getByPlaceholder('Password').fill(testData.invalidUser.invalidEmail.password);
        await page.locator('input[type="submit"]').click();
        
        await expect(page.locator('h1')).toHaveText("Login Failure");
    
    });

    test('Invalid Password Login test', async ({ page }) => {

        await page.getByPlaceholder('E-mail Address').fill(testData.invalidUser.invalidPassword.email);
        await page.getByPlaceholder('Password').fill(testData.invalidUser.invalidPassword.password);
        await page.locator('input[type="submit"]').click();
        
        await expect(page.locator('h1')).toHaveText("Login Failure");
    
    
    });

    test('Invalid Email Address and Password Login test', async ({ page }) => {

        await page.getByPlaceholder('E-mail Address').fill(testData.invalidUser.invalidEmailandPassword.email);
        await page.getByPlaceholder('Password').fill(testData.invalidUser.invalidEmailandPassword.password);
        await page.locator('input[type="submit"]').click();
        
        await expect(page.locator('h1')).toHaveText("Login Failure");
    
    
    });

    test('Empty Email Address Login test', async ({ page }) => {

        await page.getByPlaceholder('E-mail Address').fill(testData.invalidUser.emptyEmail.email);
        await page.getByPlaceholder('Password').fill(testData.invalidUser.emptyEmail.password);
        await page.locator('input[type="submit"]').click();
        
        await expect(page.locator('h1')).toHaveText("Login Failure");
    
    
    });

    test('Empty Password Login test', async ({ page }) => {

        await page.getByPlaceholder('E-mail Address').fill(testData.invalidUser.emptyPassword.email);
        await page.getByPlaceholder('Password').fill(testData.invalidUser.emptyPassword.password);
        await page.locator('input[type="submit"]').click();
        
        await expect(page.locator('h1')).toHaveText("Login Failure");
    
    
    });

    test.only('Empty Email Addeess and Password Login test', async ({ page }) => {

        await page.getByPlaceholder('E-mail Address').fill(testData.invalidUser.emptyEmailandPassword.email);
        await page.getByPlaceholder('Password').fill(testData.invalidUser.emptyEmailandPassword.password);
        await page.locator('input[type="submit"]').click();
        
        await expect(page.locator('h1')).toHaveText("Login Failure");
    
    
    });
});


