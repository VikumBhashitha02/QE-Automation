test('Search for an article', async ({ page }) => {
    await page.goto('https://onlinelibrary.wiley.com/');
    
    // Perform a search query
    await page.fill('#search-input', 'Artificial Intelligence');
    await page.click('#search-submit');
    
    // Validate that search results are displayed
    const results = page.locator('.search-result-item');
    await expect(results).toHaveCountGreaterThan(0);
  });
  