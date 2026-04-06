import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

test.describe('Hooks and page (shared browser)', () => {
    test.describe.configure({ mode: 'serial' });

let browser;
let context;
let page;

test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    console.log('beforeAll: launched Chromium browser');
});

test.beforeEach(async () => {
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/');
    console.log('beforeEach: new page ready');
});

test.afterEach(async () => {
    await page.close();
    await context.close();
    console.log('afterEach: closed page and context');
});

test.afterAll(async () => {
    await browser.close();
    console.log('afterAll: closed browser');
});

test('A/B test', async () => {
    await page.click('text="A/B Testing"');
    const header = await page.textContent('h3');
    expect(['A/B Test Control', 'A/B Test Variation 1']).toContain(header);
});

test('checkbox verification', async () => {
    await page.click('text="Checkboxes"');
    const isFirstChecked = await page.isChecked('input[type="checkbox"]:first-of-type');
     expect(isFirstChecked).toBe(false);
});

test('geolocation setting in context and verification', async () => {
    await page.close();
    await context.close();

    context = await browser.newContext({
        permissions: ['geolocation'],
        geolocation: {
            latitude: 37.774929,
            longitude: -122.419416,
            accuracy: 100,
        },
            viewport: { width: 1280, height: 720 },
        });
    page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/geolocation');
    await page.click('button');
    const lat = await page.textContent('#lat-value');
    const lon = await page.textContent('#long-value');
    expect(parseFloat(lat)).toBeCloseTo(37.774929);
    expect(parseFloat(lon)).toBeCloseTo(-122.419416);
    });
});