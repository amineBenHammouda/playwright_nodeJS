import { expect } from '@playwright/test'
import CommonActions from '../utils/CommonActions.js'

export default class SecurePage {
    constructor(page) {
        this.actions = new CommonActions(page)
        
    }

    async getMessage() {
        return await this.actions.getText('#flash')
    }

    async assertLoggedInMessage() {
        const message = await this.getMessage()
        await expect(message).toContain('You logged into a secure area!')
    }
}