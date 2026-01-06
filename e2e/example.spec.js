const { test, expect } = require('@playwright/test');

test('example.com loads', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('h1')).toHaveText('Example Domain');
});
