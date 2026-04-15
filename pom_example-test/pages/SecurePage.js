import {expect} from '@playwright/test';
import CommonActions from '../utils/commonActions';

export default class SecurePage {
    constructor(page) {
        this.actions = new CommonActions(page)
    }

    async getMessage() {
        return await this.actions.getText('#flash')
    }

    async assertLoggedMessage(passedMessage) {
        const message = await this.getMessage()
        expect(message).toContain(passedMessage)
        
    }
}