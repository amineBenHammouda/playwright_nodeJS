import { test, expect } from '@playwright/test'

class TestCasesPage {
    constructor(page) {
        this.page = page
    }

    /** Locator for the "Test Cases" button (unique by role + name). */
    get testCasesButton() {
        return this.page.getByRole('button', { name: 'Test Cases' })
    }

    async clickTestCasesButton() {
        await this.testCasesButton.click()
    }

    isTestCasesButtonVisible() {
        return this.testCasesButton
    }
}

test.describe('Test Cases Page', () => {
    let testCasesPage

    test.beforeEach(async ({ page }) => {
        testCasesPage = new TestCasesPage(page)
        await page.goto('https://automationexercise.com/')
    })

    test('should display Test Cases button', async () => {
        await expect(testCasesPage.isTestCasesButtonVisible()).toBeVisible()
    })

    test('should click Test Cases button', async ({ page }) => {
        await testCasesPage.clickTestCasesButton()
        await expect(page).toHaveURL(/.*test_cases.*/)
    })
})