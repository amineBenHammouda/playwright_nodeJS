import { expect } from '@playwright/test'
import CommonActions from '../utils/CommonActions.js'

export default class LoginPage {
    constructor(page) {
        this.actions = new CommonActions(page)
        this.usernameSelector = '#username'
        
    }

    async navigateTo() {
        await this.actions.navigateTo('https://the-internet.herokuapp.com/login')
    }
    async login(username, password) {
        await this.actions.fill(this.usernameSelector, username)
        await this.actions.fill('#password', password)
        await this.actions.click('button[type="submit"]')
    }
    async getErrorMessage(message) {
        return await this.actions.getText('#flash')
    }

    async assertErrorMessage(message) {
        const actualMessage = await this.getErrorMessage()
        await expect(actualMessage).toContain(message)
    }
    
}