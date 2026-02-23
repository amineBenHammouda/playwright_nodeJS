import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';


let browser;
let context;
let page;

test.beforeAll(async () => {
    // lunch chrome browser befor all tests
    browser = await chromium.launch({ headless: false });
    console.log('Befor hook lunched chromium browser');
})

test.beforeEach(async () => {
    // create context for a browser
    context = await browser.newContext();
    // creat new page
    page = await context.newPage();
    // Navigate to test url
    await page.goto('https://the-internet.herokuapp.com/')
    // pause execution
    console.log('Befor each lunched new page')
})

test.afterEach(async () => {
    // close the page and context
    await page.close()
    await context.close()
    console.log('After each hoock closed page')

})

test.afterAll(async () => {
    // close the browser
    await browser.close()
    console.log('After all hook closed browser')
})

test.only('A/B test', async () => {
    // navigate to the A/B test page
    await page.click('text="A/B Testing"')
    const header=await page.textContent('h3')
    expect(header).toBe('A/B Test Variation 1')
})
