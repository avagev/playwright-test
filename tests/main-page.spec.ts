import { test, expect } from '@playwright/test';

test.describe('yndhanur test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('check header menu items', async ({ page }) => {
    await expect.soft(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'Docs' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'API' })).toBeVisible();
    await expect.soft(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'Community' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'Discord server' })).toBeVisible();

    await expect
      .soft(page.getByRole('button', { name: 'Switch between dark and light' }))
      .toBeVisible();
    await expect.soft(page.getByRole('button', { name: 'Search (Ctrl+K)' })).toBeVisible();
    await expect
      .soft(page.getByRole('heading', { name: 'Playwright enables reliable' }))
      .toBeVisible();
    await expect
      .soft(page.locator('h1'))
      .toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
    await expect
      .soft(page.getByRole('link', { name: 'Get started' }))
      .toHaveAttribute('href', '/docs/intro');
  });

  test('check mode switches', async ({ page }) => {
    await page.getByLabel('Switch between dark and light mode').click();
    await page.getByLabel('Switch between dark and light mode').click();
    await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('check switches', async ({ page }) => {
    await page.getByLabel('Switch between dark and light mode').click();
    await page.getByLabel('Switch between dark and light mode').click();
    await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });
});
