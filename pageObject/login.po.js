const { test, expect } = require('@playwright/test');

exports.LoginPage = class LoginPage{
    constructor(page){
        this.page=page;
        this.email='//input[@id="email"]';
        this.password='//input[@id="password"]';
        this.loginButton='//input[@value="Log In"]';
        this.successMessage = '//div[@class="alert alert-success"]//preceding::h1';
        
    }

    async login(email,password){
        await this.page.locator(this.email).fill(email);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginButton).click();
    }

    async verifyValidLogin(){
        const verifyLoginSucess =  await this.page.locator(this.successMessage);
        await expect(verifyLoginSucess).toHaveText("Login Success");
    }
}