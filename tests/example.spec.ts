import { test, expect } from '../fixtures/baseTest';
import { Logger } from '../utils/Logger';
import { getTexts } from '../utils/LocatorUtils';


Logger.success('Samsung entered successfully');

test('has titles', async ({ page }) => {

  Logger.info('Opening Amazon');
  await page.goto('https://www.amazon.in/');

  Logger.warn('Searching Samsung');

  await page.getByPlaceholder('Search Amazon.in').fill('Samsung');

  //screenshots 
  await page.screenshot({
    path: 'screenshots/after-search.png'
  });

  //Screenshot options  //quality, caret, type, animations
  await page.screenshot({path : 'screenshots/after-search.png',fullPage : true})
  
  const search = page.locator('#nav-search-submit-button');
  await search.screenshot({path : 'screenshots/at.png'});
  await search.click();

  const phoneNames = await getTexts(
    page.locator(
      "//h2[@class='a-size-medium a-spacing-none a-color-base a-text-normal']"
    )
  );

    const prices = await getTexts(
    page.locator(
      "//span[@class='a-price' and @data-a-size='xl']//span[@class ='a-price-whole']"
    )
  );



  //set logger from sting to unknown for any type of objects
  Logger.info(phoneNames)
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
