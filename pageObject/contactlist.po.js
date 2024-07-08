const { test, expect } = require('@playwright/test');

exports.ContactListPage = class ContactListPage{
    constructor(page){
        this.page=page;
        this.email='//input[@id="email"]';
        this.password='//input[@id="password"]';
        this.loginButton='//*[@id="submit"]';
        this.dashboardTitle = '//button[@id="logout"]/preceding::h1[1]';
        this.addContactPageButton = '//button[@id="add-contact"]';
        this.addContactPageTitle= '//button[@id="logout"]/preceding::h1[1]';
        this.firstname='//input[@id="firstName"]';
        this.lastname='//input[@id="lastName"]';
        this.dateofbirth='//*[@id="birthdate"]//self::input';
        //*[@id="birthdate"]
        this.email='//*[@id="email"]';
        this.phonenumber='//*[@id="phone"]';
        this.streetaddress='//*[@id="street1"]';
        this.city='//*[@id="city"]';
        this.state='//*[@id="stateProvince"]';
        this.postalcode='//*[@id="postalCode"]';
        this.country='//*[@id="country"]';
        this.addCotactButton='//button[@id="submit"]';
        this.afteraddcontactPage='(//p)[1]';
        this.selectonecontact = '//*[@id="myTable"]/tr[1]';
        this.singlecontactpage='//*[@id="firstName"]';
        //*[@id="firstName"]
        this.editButton='//*[@id="edit-contact"]';
        this.editPage='//*[@id="edit-contact"]/p[1]/label';
        this.editFirstname='//*[@id="firstName"]';
        this.editLastname='//*[@id="lastName"]';
        this.editphonenumber='//*[@id="phone"]';
        this.editsubmitbutton='//*[@id="submit"]';
        this.editedfirstname='//*[@id="firstName"]';
        this.selecttodelete='//*[@id="myTable"]/tr[2]/td[2]';
        this.deletebutton='//*[@id="delete"]';
        this.returncontactlistbutton='//*[@id="return"]';
    }

    async login(email,password){
        await this.page.locator(this.email).fill(email);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginButton).click();
    }

    async verifyValidLogin(){
        const verifyLoginSucess =  await this.page.locator(this.dashboardTitle);
        await expect(verifyLoginSucess).toHaveText("Contact List");
    }

    async openAddContactPage(){
        await this.page.locator(this.addContactPageButton).click();
        const verifyLoginSucess =  await this.page.locator(this.addContactPageTitle);
        await expect(verifyLoginSucess).toHaveText("Add Contact");
    }

    async verifyContactAdded(firstname,lastname,dateofbirth,email,phonenumber,streetaddress,city,country){
        await this.page.locator(this.firstname).fill(firstname);
        await this.page.locator(this.lastname).fill(lastname);
        await this.page.locator(this.dateofbirth).fill(dateofbirth);
        await this.page.locator(this.email).fill(email);
        await this.page.locator(this.phonenumber).fill(phonenumber);
        await this.page.locator(this.streetaddress).fill(streetaddress);
        await this.page.locator(this.city).fill(city);
        // await this.page.locator(this.postalcode).fill(postalcode);
        await this.page.locator(this.country).fill(country);
        await this.page.locator(this.addCotactButton).click();
        const verifyaddcontactSucess =  await this.page.locator(this.afteraddcontactPage);
        await expect(verifyaddcontactSucess).toHaveText("Click on any contact to view the Contact Details");
    }

    async openIndividualContact(){
        await this.page.locator(this.selectonecontact).click();
        const verifyOpenIndividualSuccess =  await this.page.locator(this.singlecontactpage);
        await expect(verifyOpenIndividualSuccess).toHaveText("Nijal");
    }

    async clickEditButton(){
        await this.page.locator(this.editButton).click();
        const editPageOpen =  await this.page.locator(this.editPage);
        await expect(editPageOpen).toHaveText("First Name:");
    }

    async edit_firstname(editFirstname,editLastname,editphonenumber){
        await this.page.locator(this.editFirstname).fill(editFirstname);
        await this.page.locator(this.editLastname).fill(editLastname);
        await this.page.locator(this.editphonenumber).fill(editphonenumber)
        await this.page.locator(this.editsubmitbutton).click();
        const editfirstnameVerify =  await this.page.locator(this.editFirstname);
        await expect(editfirstnameVerify).toHaveText("Luzza");
    }

    async deletecontact(){
        await this.page.locator(this.selecttodelete).click();
        const verifyOpenIndividualSuccess =  await this.page.locator(this.singlecontactpage);
        await expect(verifyOpenIndividualSuccess).toHaveText("Luzza");
        this.page.on("dialog",(dialog)=>dialog.accept());
        await this.page.locator(this.deletebutton).click();
        this.page.waitForTimeout(2000);
    }


    async returncontactlist(){
        await this.page.locator(this.returncontactlistbutton).click();
        const verifyreturn =  await this.page.locator(this.dashboardTitle);
        await expect(verifyreturn).toHaveText("Contact List");
    }
}