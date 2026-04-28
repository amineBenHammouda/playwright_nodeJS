import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage.js'
import { HomePage } from '../pages/homePage.js'

let loginPage
let homePage

test.beforeAll(async ({ browser }) => {
    console.log('this actions run before all tests')
})

test.beforeEach('this actions run before each test',async ({ page },testInfo) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    await loginPage.navigate()
    console.log(`test starts for: ${testInfo.title}`)
})

test.afterEach('this actions run after every test',async ({ page },testInfo) => {
    console.log(`test ends for: ${testInfo.title}`)
})

test.afterAll('this actions run after all tests',async () => {
    console.log('this actions run after all tests')
})

test.describe('Login Page', () => {
    test('valid login', async ({ page }) => {
        await loginPage.login('student', 'Password123')
        await homePage.assertWelcomeMessage()
    })
})

test('invalid login', async ({ page }) => {
    await loginPage.login('incorrectUser', 'Password123')
    await loginPage.assertInvalidLoginMessage()
})