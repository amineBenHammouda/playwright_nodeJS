import { test, expect } from '@playwright/test';

test.only('Learning selectors', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    // selecting by ID
    await page.locator('#username').fill('tomsmith');

    // assert the username field has the value 'tomsmith'
    await expect(page.locator('#username')).toHaveValue('tomsmith');
    
    // selecting by label
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    // selecting by class
    //await page.locator('.radius').click();
    // selecting by tag and class
    //await page.locator('button.radius').click();

    
    // selecting by attribute
    await page.locator('[type="submit"]').click();
    await page.pause();



})