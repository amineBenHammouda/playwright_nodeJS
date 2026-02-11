import { test, expect } from '@playwright/test';

test.describe.only('Learn assertions', () => {
    test('Verify web page behavior', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')

        // to have URL
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/')
        await page.pause()

        // verify title
        await expect(page).toHaveTitle('The Internet')
        await page.pause()

    })
    test.only('Continue with assertions', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')
        // assert visibility
        await page.pause()
        await expect(page.locator('h1')).toBeVisible()
        await page.pause()

    })

})