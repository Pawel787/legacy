import { expect, Page } from '@playwright/test';

  export async function checkPhone(page: Page, phone: string) {
  await page.goto('https://libphonenumber.appspot.com/');


  await page.getByRole('heading', { name: 'Phone Number Parser Demo for' })
  await page.locator('input[name="phoneNumber"]').clear;
  await page.locator('input[name="phoneNumber"]').fill('+48'+phone);

  const submitButton = page.getByRole('button', { name: 'Submit' });
  await expect(submitButton).toBeEnabled(); // Will fail if disabled
  await submitButton.click();

  await page.getByRole('button', { name: 'Submit' }).click

  page.getByRole('cell', { name: 'Result from getNumberType()' });
  console.info('Checking phone number: ' + phone);

  await expect(page.getByRole('cell', { name: 'MOBILE', exact: true })).toHaveText('MOBILE');

  };