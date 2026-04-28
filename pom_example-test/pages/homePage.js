import { expect } from '@playwright/test'

export class HomePage {
    page
    welcomeMessage
    
    constructor(page) {
        this.page = page
        this.welcomeMessage = page.getByText(/congratulations|successfully logged in/i)
    }

    async assertWelcomeMessage() {
        await expect(this.welcomeMessage).toBeVisible()
    }
}    