import { expect, Page } from '@playwright/test';

  export async function enrollUserViaWeb(page: Page, phone: string) {
  await page.goto('https://okta-auth-cloudfront-qa.webo-test.alpaque.net/pl?appId=blt544fcc3f2b46c6a8&bu=pl');
  
  await expect(page.getByRole('heading', { name: 'Zarejestruj się lub zaloguj,' })).toBeVisible();

  // const phoneInput = page.locator('input[name="phone"]');
  const phoneInput = page.getByPlaceholder('1 (702) 123-4567');
  await expect(phoneInput).toBeEditable;
  // phoneInput.click();
  // await expect(phoneInput).toHaveValue('');
  await phoneInput.fill(phone);
  await page.getByRole('button', { name: 'Kontynuuj' }).click()


  await page.getByRole('textbox', { name: 'Imię *'}).fill('test');
  await page.getByRole('textbox', { name: 'Nazwisko *'}).fill('test');
  await page.getByRole('textbox', { name: 'Adres e-mail *'}).fill(phone+'@mail.com');
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