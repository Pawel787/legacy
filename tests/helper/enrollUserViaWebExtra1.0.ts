import { expect, Page } from '@playwright/test';

  export async function enrollUserViaWeb(page: Page, phone: string) {
  await page.goto('https://qa-extra2-core.qa.gneis.io');
  
  const emailInput = page.getByRole('textbox', { name: 'E-mail' });
  const passwordInput = page.getByRole('textbox', { name: 'Hasło' });

  await expect(page.getByText(('Zaloguj się do Circle K ID'))).toBeVisible();
  await expect(passwordInput).toBeVisible();

  emailInput.fill


  await page.getByRole('textbox', { name: 'Imię *'}).fill('test');
  await page.getByRole('textbox', { name: 'Nazwisko *'}).fill('test');
  await page.getByRole('textbox', { name: 'Adres e-mail *'}).fill('test'+phone+'@mail.com');
  await page.getByRole('textbox', { name: 'DD/MM/YYYY'}).fill('28/05/2000');
  await page.getByRole('textbox', {name: 'hasło * toggle password'}).fill('Test1234,.');

  const checkbox = page.getByRole('checkbox', { name: 'Przeczytałem i zaakceptowałem' });
  await checkbox.click();
  await expect(checkbox).toBeChecked();

  const checboxWyrazam = page.getByRole('checkbox', { name: 'Wyrażam zgodę na politykę' });
  await checboxWyrazam.click();
  await expect(checboxWyrazam).toBeChecked
  
  const confirmButton = page.getByRole('button', { name: 'potwierdź dane uwierzytelniaj' });

  // Check if button is visible and enabled
  await expect(confirmButton).toBeVisible();
  await expect(confirmButton).toBeEnabled();

  // Then you can safely click
  await confirmButton.click();

  //Next page
  await page.getByRole('heading', { name: 'Wysłaliśmy do Ciebie SMS' })
  await page.getByRole('textbox', { name: 'Please enter OTP character 1' }). fill('0');
  await page.getByRole('textbox', { name: 'Please enter OTP character 2' }). fill('0');
  await page.getByRole('textbox', { name: 'Please enter OTP character 3' }). fill('0');
  await page.getByRole('textbox', { name: 'Please enter OTP character 4' }). fill('0');
  await page.getByRole('textbox', { name: 'Please enter OTP character 5' }). fill('0');
  await page.getByRole('textbox', { name: 'Please enter OTP character 6' }). fill('0');

  const buttonPotwierdzKod = page.getByRole('button', { name: 'potwierdź kod dostępu i' })
  await expect(buttonPotwierdzKod).toBeVisible();
  await expect(buttonPotwierdzKod).toBeEnabled();
  await buttonPotwierdzKod.click();

  await page.locator('text=Best experience is waiting in').waitFor({ timeout: 50000 });

  // await expect(page.getByText('Best experience is waiting in')).toBeVisible({ timeout: 100000 });


};