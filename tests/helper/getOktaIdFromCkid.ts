import { expect, Page } from '@playwright/test';
import { ok } from 'assert';
import { log } from 'console';
import { hasUncaughtExceptionCaptureCallback } from 'process';

  export async function getOktaIdFromCkid(page: Page, phone: string, visible: boolean) {
  await page.goto('https://qa-circlekid-core.qa.gneis.io/admin/#/user/search');

  await page.getByRole('textbox', { name: 'Username' }).fill('PAWEBRO');
 
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('KiepskiMaj31');
  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.getByRole('heading', { name: 'Search' }).click();

  log('Searching for user in CKID with phone number:', phone);
  await page.getByRole('spinbutton', { name: 'Country code (e.g. 48)' }).fill('48');
  await page.getByRole('spinbutton', { name: 'Phone number (e.g. 504022111)' }).fill(phone);
  await page.getByRole('button', { name: 'Search by phone number' }).click();

  log

  if (visible) {
    log('Expecting user to be found in CKID');
    await expect(page.getByRole('heading', { name: 'User found' })).toBeVisible();
    await page.getByRole('button', { name: 'View user details' }).click();
    await page.getByRole('button', { name: 'Close' }).click();
  }
  else {
    throw new Error('User was not found in CKID. Stopping test.');
  }

  

  };