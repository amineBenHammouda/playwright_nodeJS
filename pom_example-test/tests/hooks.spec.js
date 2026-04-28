import {test, expect} from '@playwright/test'


test.beforeAll(async ({ browser }) => {
    console.log('this actions run before all tests')
})

test.beforeEach('this actions run before each test',async ({ page },testInfo) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/')
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
        await page.getByLabel('Username').fill('student')
        await page.getByLabel('Password').fill('Password123')
        await page.getByRole('button', { name: 'Submit' }).click()
        await expect(page).toHaveURL(/logged-in-successfully/i)
        await expect(page.getByText(/congratulations|successfully logged in/i)).toBeVisible()
        await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible()
    })
})

test('invalid login', async ({ page }) => {
    await page.getByLabel('Username').fill('incorrectUser')
    await page.getByLabel('Password').fill('Password123')
    await page.getByRole('button', { name: 'Submit' }).click()
    await expect(page.locator('#error')).toBeVisible()
    await expect(page.locator('#error')).toHaveText('Your username is invalid!')
})