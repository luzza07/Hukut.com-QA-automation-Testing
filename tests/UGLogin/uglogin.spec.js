const { test, expect } = require('@playwright/test');
const testData = require("../../fixtures/Login.Fixtures.json");

test.beforeEach(async({page})=>{
    await page.goto('https://www.ugcakes.com/')
    // await page.goto("./");
});

test('has title', async ({ page }) => {
  
    // Expect a title "to contain" a substring.
    
    await expect(page).toHaveTitle('UG Cakes | Happiness At Your Doorsteps| Online Cakes in Kathmandu | Send Cakes To Nepal');
});

test.describe("UG Cakes successful Login",()=>{
test('Login with valid user', async ({ page }) => {
    // Click on the "Login" link
    await page.click('a:has-text("Login")');
  
    // Verify that the login form header (h1) appears and contains "Login"
    const loginHeader = await page.locator('//*[@id="root"]/div/div/div/div/div/div/div[2]/div/div[1]/div/div/p');
    await expect(loginHeader).toHaveText("Welcome back, please login to your account.");

    await page.locator('//*[@id="login_email"]').fill("nickymaharjan2003@gmail.com");
    await page.locator('//*[@id="root"]/div/div/div/div/div/div/div[2]/div/div[1]/div/div/form/div[3]/button/span[1]').click();
    await page.locator('//*[@id="login_password"]').fill("Nicky9880367728");
    await page.locator('//*[@id="root"]/div/div/div/div/div/div/div[2]/div/div[1]/div/div/form/div[3]/button/span[1]').click();
    await expect(page.locator('//*[@id="menu-nav"]/li/div/span/span')).toHaveText("Shop By Categories");
});

test('Open  individual item'),async({page}) =>{
    await page.locator('//*[@id="root"]/div/div[2]/div[2]/div/div/div[1]/a/div/div/span[2]').click();
    await expect(page.locator('//*[@id="root"]/div/div[2]/div[1]/div/div/h1')).toHaveText("Dry Cakes");
    await page.locator('//*[@id="root"]/div/div[2]/div[2]/div[2]/div[2]/div[3]/div[2]/div/div[2]/button[2]').click();
    await page.evaluate(() => {
        window.scrollTo(0, 0); // Scroll to the top
      });
    await page.locator('/html/body/div[7]/div/div/div/div[2]/div/div/div/div[2]/a/button/span').click();
    await expect(page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div[1]/div[1]/div/h1')).toHaveText("My Cart");
}
});

// test('Valid Email Address Login test', async ({ page }) => {

//     await page.getByLocator('//*[@id="login_email"]').fill("nickymaharjan2003@gmail.com");
//     await page.locator('//*[@id="root"]/div/div/div/div/div/div/div[2]/div/div[1]/div/div/form/div[3]/button/span[1]').click();
//     await page.getByPlaceholder('Email').fill("Nicky9880367728");
//     await page.locator('//*[@id="root"]/div/div/div/div/div/div/div[2]/div/div[1]/div/div/form/div[3]/button/span[1]').click();
//     await expect(page.locator('//*[@id="root"]/div/div[2]/div[3]/div[2]/div/h1/center')).toHaveText("CURRENT OFFERS");


// });
