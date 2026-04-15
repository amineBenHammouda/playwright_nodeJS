import Login from './login'
import SecurePage from './SecurePage'
import CheckboxesPage from './CheckboxesPage'

export default class PomManager {
    constructor(page) {
        this.page = page
        this.login = new Login(page)
        this.securePage = new SecurePage(page)
        this.checkboxesPage = new CheckboxesPage(page) 
    }
}