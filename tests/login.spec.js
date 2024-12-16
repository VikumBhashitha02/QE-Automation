const { test, expect } = require('@playwright/test');

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');
  
  // Navigate to the login page
  await page.click('text=Sign In');
  
  // Fill in the login credentials
  await page.fill('#username', 'valid_email@example.com');
  await page.fill('#password', 'ValidPassword123');
  
  // Submit the login form
  await page.click('button[type="submit"]');
  
  // Assert that the user is redirected to the dashboard or homepage
  await expect(page).toHaveURL(/.*dashboard/);
});
