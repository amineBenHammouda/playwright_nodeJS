import {test, expect} from '@playwright/test'
import { PomManager } from '../pages/PomManager.js'
import testUsers from '../testData/testUsers.json'

let pomManager

//json format -> string -> JS object
const parsedJsonData = JSON.parse(JSON.stringify(testUsers))

test.beforeAll(async ({ browser }) => {
    console.log("json username: ", parsedJsonData.validUser.username)
    console.log("json password: ", parsedJsonData.validUser.password)
    console.log('this actions run before all tests')
})

test.beforeEach('this actions run before each test',async ({ page },testInfo) => {
    pomManager = new PomManager(page)
    await pomManager.loginPage.navigate()
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
        await pomManager.getLoginPage().login(parsedJsonData.validUser.username, parsedJsonData.validUser.password)
        await pomManager.getHomePage().assertWelcomeMessage()
    })
})

test('invalid login', async ({ page }) => {
    await pomManager.getLoginPage().login(parsedJsonData.invalidUser.username, parsedJsonData.invalidUser.password)
    await pomManager.getLoginPage().assertInvalidLoginMessage()
})