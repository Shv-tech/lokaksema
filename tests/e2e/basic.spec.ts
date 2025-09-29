import { test, expect } from '@playwright/test';

test('homepage has hero title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.getByRole('heading', { name: /responsible innovation/i })).toBeVisible();
});
