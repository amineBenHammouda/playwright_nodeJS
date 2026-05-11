const { createBdd } = require('playwright-bdd');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');


const { Given, When, Then, Before } = createBdd();


let loginPage;
Before(async ({page}) => {
    loginPage = new LoginPage(page);
});


Given('I navigate to {string}', async ({}, url) => {
    await loginPage.launchURL(url);
    
  });
  
  Given('I enter username {string}', async ({}, username) => {
    await loginPage.enterUsername(username);

  });
  
  Given('I enter password {string}', async ({}, password) => {
    await loginPage.enterPassword(password);
  });
  
  When('I click the login button', async ({}) => {
    await loginPage.clickLoginButton();
  });
  
  Then('I should se the page containing {string}', async ({}, successMsg) => {
    const message = await loginPage.getSuccessMsg();
    expect(message).toContain(successMsg);
  });