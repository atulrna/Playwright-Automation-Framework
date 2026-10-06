import { test as base, expect } from '@playwright/test';

export const test = base;

// Before every test
test.beforeEach(async ({ page }, testInfo) => {
  console.log('----------------------------------------');
  console.log(`START TEST : ${testInfo.title}`);
  console.log(`BROWSER    : ${testInfo.project.name}`);
  console.log(`START TIME : ${new Date().toLocaleTimeString()}`);
  console.log('----------------------------------------');
});

// After every test
test.afterEach(async ({ page }, testInfo) => {

  console.log('----------------------------------------');
  console.log(`TEST       : ${testInfo.title}`);
  console.log(`STATUS     : ${testInfo.status}`);
  console.log(`DURATION   : ${testInfo.duration} ms`);
  console.log(`URL        : ${page.url()}`);

  // Screenshot only when test fails
  if (testInfo.status !== testInfo.expectedStatus) {

    const screenshotPath = testInfo.outputPath('failure.png');

    await page.screenshot({
      path: screenshotPath,
      fullPage: true
    });

    console.log(`SCREENSHOT : ${screenshotPath}`);
  }

  console.log('----------------------------------------');
});

test.beforeAll(async () => {
  console.log('========================================');
  console.log('TEST SUITE STARTED');
  console.log('========================================');
});

test.afterAll(async () => {
  console.log('========================================');
  console.log('TEST SUITE FINISHED');
  console.log('========================================');
});

export { expect };