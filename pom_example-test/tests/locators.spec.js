import { test, expect } from '@playwright/test'

test.describe('Login Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/')
    })
    test.afterEach(async ({ page }) => {
        await page.close()
    })

    test('valid login', async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/login')
        await page.locator('input[name="username"]').fill('practice')
        await page.locator('#password').fill('SuperSecretPassword!')
        await page.locator('#submit-login').click()
        await expect(page.locator(`b:has-text("You logged into a secure area!")`)).toBeVisible()    
    })
    
    test('invalid login', async ({ page }) => {
        await page.goto('https://practice.expandtesting.com/login')
        await page.locator('input[name="username"]').fill('practice')
        await page.locator('#password').fill('SuperSecretPassword!123')
        await page.locator('#submit-login').click()
        await expect(page.locator(`b:has-text("Your password is invalid!")`)).toBeVisible()
    })
    
    test.only('search', async ({ page }) => {
        await page.locator('#search-input').fill('login')
        await page.locator('#search-button').click()
        await expect(page.locator('.my-link:has-text("Login")')).toBeVisible()
        await page.pause()
    })
})
 