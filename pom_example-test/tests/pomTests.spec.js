import { test, expect } from '@playwright/test'
import PomManager from '../pages/PomManager.js'


let pm;

test.describe('Login Page', () => {
    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page)
    })
    test.afterEach(async ({ page }) => {
        await page.close()
    })

    test('should login with valid credentials', async ({ page }) => {
        await pm.login.navigate()
        await pm.login.login('tomsmith', 'SuperSecretPassword!')
        await pm.securePage.assertLoggedMessage('You logged into a secure area!')

        // assert value directly in test 
        const message = await pm.securePage.getMessage()
        expect(message).toContain('You logged into a secure area!')
    })

    test('login with valid incridentials', async ({ page }) => {
        await pm.login.navigate()
        await pm.login.login('invalidUser', 'SuperSecretPassword!')
        await pm.login.assertErrorMessage('Your username is invalid!')
    })
})

test.describe('checkbox verification', () => {
    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page)
    })
    test.afterEach(async ({ page }) => {
        await page.close()
    })

    test('test check and uncheck the checkbox', async ({ page }) => {
        await pm.checkboxesPage.navigate()
        await pm.checkboxesPage.checktCheckboxes(1)
        await pm.checkboxesPage.assertCheckboxe(1, true)

        await pm.checkboxesPage.navigate()
        await pm.checkboxesPage.checktCheckboxes(2)
        await pm.checkboxesPage.assertCheckboxe(2, false)
    })
})
