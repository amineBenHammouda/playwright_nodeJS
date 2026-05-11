class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#submit');
        this.successMsg = page.getByText('Logged In Successfully');
        this.errorMessage = page.locator('#error');
    }

    async launchURL(url) {
        await this.page.goto(url);
    }

    async enterUsername(username) {
        await this.username.fill(username);
    }
    
    async enterPassword(password) {
        await this.password.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async getSuccessMsg() {
        return await this.successMsg.textContent();
    }
}

module.exports = { LoginPage };