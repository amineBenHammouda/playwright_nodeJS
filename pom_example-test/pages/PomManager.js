import { LoginPage } from './loginPage.js'
import { HomePage } from './homePage.js'

export class PomManager {
    constructor(page) {
        this.page = page
        this.loginPage = new LoginPage(page)
        this.homePage = new HomePage(page)
    }

    getLoginPage() {
        return this.loginPage
    }

    getHomePage() {
        return this.homePage
    }
}