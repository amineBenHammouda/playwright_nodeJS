import { test, expect } from '@playwright/test';

test.describe.only('Learn assertions', () => {
    test('Verify web page behavior', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')
        await page.pause()

        // to have URL
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/')

        // verify title
        await expect(page).toHaveTitle('The Internet')

    })
    test('Continue with assertions', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')
        // assert visibility
        await expect(page.locator('h1')).toBeVisible()

        // assert element to have text
        await expect(page.locator('h2')).toHaveText('Available Examples')

        // assert element to contain text
        await expect(page.locator('body')).toContainText('WYSIWYG')
    })

    test('Continue with assertions part 2', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')

        //asssert count
        await expect(page.locator('a')).toHaveCount(46)

        // element to be checked
        await page.goto('https://the-internet.herokuapp.com/checkboxes')
        await page.getByRole('checkbox').nth(0).check()
        await page.getByRole('checkbox').nth(1).uncheck()

        await expect(page.getByRole('checkbox').nth(0)).toBeChecked()
        await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked()

    })

    test('Continue with assertions part 3', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login')

        // have value
        await page.locator('#username').fill('tomsmith')
        await expect(page.locator('#username')).toHaveValue('tomsmith')

        // element is enabled
        await expect(page.locator('button[type="submit"]')).toBeEnabled()
    })

    test('Continue with assertions part 4', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/')

        // store text in a variable and then verify content
        const headerText = await page.locator('h1').textContent()
        await expect(headerText).toBe('Welcome to the-internet')
        await page.pause()
    })
})