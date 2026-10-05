import { test, expect } from '@playwright/test';
import * as LocatorUtils from '../utils/LocatorUtils';

test('has titles', async ({ page }) => {

  await page.goto('https://www.amazon.in/');

  await page.getByPlaceholder('Search Amazon.in').fill('Samsung');

  await page.locator('#nav-search-submit-button').click();

  const phoneNames = await LocatorUtils.getTexts(
    page.locator(
      "//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal']"
    )
  );

    const prices = await LocatorUtils.getTexts(
    page.locator(
      "//span[@class='a-price' and @data-a-size='xl']//span[@class ='a-price-whole']"
    )
  );



  console.log('Products:', phoneNames);
  console.log('Count:', phoneNames.length);

  console.log('Prices:', prices);
  console.log('Count:', prices.length);


  for(let i=0; i<phoneNames.length; i++){
    console.log(`${phoneNames[i]} -> ${prices[i]}`);

  }
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
