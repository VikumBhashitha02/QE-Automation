test('Verify access to an article after login', async ({ page }) => {
    await page.goto('https://onlinelibrary.wiley.com/');
    
    // Login to the website
    await page.click('text=Sign In');
    await page.fill('#username', 'valid_email@example.com');
    await page.fill('#password', 'ValidPassword123');
    await page.click('button[type="submit"]');
    
    // Navigate to an article
    await page.goto('https://onlinelibrary.wiley.com/doi/10.1002/exampleArticle');
    
    // Verify that the article content is visible
    const articleContent = page.locator('.article-content');
    await expect(articleContent).toBeVisible();
  });
  