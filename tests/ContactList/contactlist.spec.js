import { ContactListPage } from '../../pageObject/contactlist.po';

const { test, expect } = require('@playwright/test');
const testData = require("../../fixtures/ContactList.Fixtures.json");
const { authenticateUser1, createEntity } = require("../../utils/helper.spec");
let interceptId;

test.beforeEach(async ({ page }) => {
    // await page.goto('https://thinking-tester-contact-list.herokuapp.com/')
    await page.goto("./");
    await expect(page).toHaveTitle('Contact List App');
    const contactlist = new ContactListPage(page);
    await contactlist.login(testData.validUser.email, testData.validUser.password);
    await contactlist.verifyValidLogin();
});

// test('has title', async ({ page }) => {

//     // Expect a title "to contain" a substring.

//     await expect(page).toHaveTitle('Contact List App');
//     const contactlist = new ContactListPage(page);

//     await contactlist.login(testData.validUser.email, testData.validUser.password);
//     await contactlist.verifyValidLogin();
//     // await contactlist.deletecontact();

//     // await page.getByPlaceholder('Email').fill(testData.validUser.email);
//     // await page.getByPlaceholder('Password').fill(testData.validUser.password);
//     // await page.locator('//button[@id="submit"]').click();
//     // await expect(page.locator('(//p)[1]')).toHaveText("Click on any contact to view the Contact Details");

//     // await page.locator('//button[@id="add-contact"]').click();
//     // await expect(page.locator('h1')).toHaveText("Add Contact");

//     // await page.getByPlaceholder('First Name').fill(testData.addContact.firstname);
//     // await page.getByPlaceholder('Last Name').fill(testData.addContact.lastname);
//     // await page.locator('//button[@id="submit"]').click();
//     // await expect(page.locator('//*[@id="myTable"]/tr[1]/td[2]')).toHaveText("Prajwol Maharjan");
// });

// test.describe("Crud Operation", () => {

// test('Valid Email Address and Password Login test', async ({ page }) => {
//     const contactlist = new ContactListPage(page);

//     await contactlist.login(testData.validUser.email, testData.validUser.password);
//     await contactlist.verifyValidLogin();
//     // await page.getByPlaceholder('Email').fill('nickymaharjan2003@gmail.com');
//     // await page.getByPlaceholder('Password').fill('Nicky1234');
//     // await page.locator('//*[@id="submit"]').click();

//     // await expect(page.locator('/html/body/div/p[1]')).toHaveText("Click on any contact to view the Contact Details");

// });
test.describe("Crud Operation", () => {
test('Add contact test', async ({ page }) => {
    const contactlist = new ContactListPage(page);
    
    await contactlist.openAddContactPage();

    await contactlist.verifyContactAdded(testData.addContact.firstname, testData.addContact.lastname, testData.addContact.dateofbirth, testData.addContact.email, testData.addContact.phonenumber, testData.addContact.streetaddress, testData.addContact.city, testData.addContact.state, testData.addContact.country);
});

test('Edit contact test', async ({ context, page, request }) => {
    const contactlist = new ContactListPage(page);
    const Data = { firstName: "hello", lastname: "world" };
    const accessToken = await authenticateUser1({ request });
    const entityId = await createEntity(Data, accessToken, 'contacts', { request });
    await intercept('https://thinking-tester-contact-list.herokuapp.com/', { context, page });
    page.reload();
    page.waitForTimeout(5000);
    await contactlist.openIndividualContact();
    await contactlist.clickEditButton();
    await contactlist.edit_firstname(testData.editContact.firstname, testData.editContact.lastname, testData.editContact.phonenumber);
    //await page.waitforTimeout(5000);
    //await deleteEntity(accessToken,'/contacts')
});

// test('Return to conatct list page', async ({ page }) => {
//     const contactlist = new ContactListPage(page);
//     await contactlist.returncontactlist();
// })

async function intercept(module,{context,page}){
    await context.route(module,async route =>{
        await route.continue();
        const response = await page.waitForResponse(module);
        const responseBody = await response.json();
        interceptId - responseBody._id;
    });
}
});