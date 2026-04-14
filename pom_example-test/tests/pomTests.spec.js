import { test, expect } from '@playwright/test'
import Login from '../pages/login'


let loginPage;

test.describe('Login Page', () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new Login(page)
    })

    test('should login with valid credentials', async ({ page }) => {
        await loginPage.navigate()
        await loginPage.login('tomsmith', 'SuperSecretPassword!')
        
    })
})
