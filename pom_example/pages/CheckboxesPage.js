// pages/CheckboxesPage.js
import { expect } from '@playwright/test'
import CommonActions from '../utils/CommonActions.js'

export default class CheckboxesPage {
    constructor(page) {
        this.actions = new CommonActions(page)
    }

    async navigateTo() {
        await this.actions.navigateTo('https://the-internet.herokuapp.com/checkboxes')
    }

    async checkCheckbox(index) {
        await this.actions.click(`#checkboxes input:nth-of-type(${index})`)
    }

    async assertCheckboxChecked(index) {
        const isChecked = await this.actions.isChecked(`#checkboxes input:nth-of-type(${index})`)
        expect(isChecked).toBe(true)
    }

    async assertCheckboxUnchecked(index) {
        const isChecked = await this.actions.isChecked(`#checkboxes input:nth-of-type(${index})`)
        expect(isChecked).toBe(false)
    }
}