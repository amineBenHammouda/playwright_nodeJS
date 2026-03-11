import { test, expect } from '@playwright/test'
import POMManager from '../pages/pomManagers.js'

let pm

test.describe('Login Tests', () => {
    test.beforeEach(async ({ page }) => {
        pm = new POMManager(page)
        
    })

    test.afterEach(async () => {
        await pm.page.close()
    })
    
    test('Login with valid credentials', async () => {
        await pm.loginPage.navigateTo()
        await pm.loginPage.login('tomsmith', 'SuperSecretPassword!')
        await pm.securePage.assertLoggedInMessage('You logged into a secure area!')
        // assert value directly in test 
        const message = await pm.securePage.getMessage()
        await expect(message).toContain('You logged into a secure area!')
    })
    
    test('Check and uncheckboxes', async () => {
        await pm.checkboxesPage.navigateTo()
        await pm.checkboxesPage.checkCheckbox(1)
        await pm.checkboxesPage.assertCheckboxChecked(1)
    })

})    


test.describe('Checkboxes Tests', () => {
    test.beforeEach(async ({ page }) => {
        pm = new POMManager(page)
    })

    test.afterEach(async () => {
        await pm.page.close()
    })

    test('Check and uncheckboxes', async () => {
        await pm.checkboxesPage.navigateTo()
        await pm.checkboxesPage.checkCheckbox(1)
        await pm.checkboxesPage.assertCheckboxChecked(1)


        await pm.checkboxesPage.navigateTo()
        await pm.checkboxesPage.checkCheckbox(2)
        await pm.checkboxesPage.assertCheckboxUnchecked(2)
    })

})