import { Locator } from '@playwright/test';

export async function getTexts(locator: Locator): Promise<string[]> {
  await locator.first().waitFor();
  return await locator.allInnerTexts();
}