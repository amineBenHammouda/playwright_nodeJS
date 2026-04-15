import {expect} from '@playwright/test';
import CommonActions from '../utils/commonActions';

export default class CheckboxesPage {
    constructor(page) {
        this.actions = new CommonActions(page)
    }

    async navigate() {
        await this.actions.navigateTo('https://the-internet.herokuapp.com/checkboxes')
    }

    async checktCheckboxes(index) {
        await this.actions.click(`input[type="checkbox"]:nth-of-type(${index})`)
    }

    async istChecked(index) {
        return await this.actions.isChecked(`input[type="checkbox"]:nth-of-type(${index})`)
    }

    async assertCheckboxe(index, expectedCheked) {
        const isChecked = await this.istChecked(index)
        expect(isChecked).toBe(expectedCheked)
    }
}