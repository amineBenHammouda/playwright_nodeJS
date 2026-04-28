import { expect } from '@playwright/test'

export class LoginPage {
    page
    username_tb
    password_tb
    login_btn
    invalidLoginMessage
    url = 'https://practicetestautomation.com/practice-test-login/'
    invalidLoginMessageText = 'Your username is invalid!'

    constructor(page) {
        this.page = page
        this.username_tb = page.getByLabel('Username')
        this.password_tb = page.getByLabel('Password')
        this.login_btn = page.getByRole('button', { name: 'Submit' })
        this.invalidLoginMessage = page.locator('#error')
    }

    async navigate() {
        await this.page.goto(this.url)
    }

    async login(username, password) {
        await this.username_tb.fill(username)
        await this.password_tb.fill(password)
        await this.login_btn.click()
    }

    async assertInvalidLoginMessage() {
        await expect(this.invalidLoginMessage).toHaveText(this.invalidLoginMessageText)
    }
}    