import { test, expect } from '@playwright/test';

test.describe('Learn assertions', () => {
    test('Verify web page behavior', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')

        // to have URL
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/')
        await page.pause()

        // verify title
        await expect(page).toHaveTitle('The Internet')
        await page.pause()

    })
    test('Continue with assertions', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')
        // assert visibility
        await expect(page.locator('h1')).toBeVisible()

        // assert element to have text
        await expect(page.locator('h2')).toHaveText('Available Examples')

        // assert element to contain text
        await page.pause()
        await expect(page.locator('body')).toContainText('WYSIWYG')
        await page.pause()

    })

    test.only('Continue with assertions part 2', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')
    })

})