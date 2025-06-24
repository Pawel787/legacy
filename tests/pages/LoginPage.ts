import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly createAccountButton: Locator;
  readonly acceptCookiesButton: Locator;
  readonly loginButton: Locator;
  readonly codeInput: Locator;
  readonly confirmButton: Locator;
  readonly skipButton: Locator;
  readonly editUserDetailsButton: Locator;
  // ...other elements...

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#login-email-input-field');
    this.passwordInput = page.locator('#login-password-input-field');
    this.createAccountButton = page.getByRole('button', { name: 'utwórz' });
    this.acceptCookiesButton = page.getByRole('button', { name: 'USE NECESSARY COOKIES ONLY' });
    this.loginButton = page.getByRole('button', { name: 'Log in' });
    this.codeInput = page.locator('#input-mfa-code');
    this.confirmButton = page.getByRole('button', { name: 'Confirm' });
    this.skipButton = page.getByRole('button', { name: 'Pomiń' });
    this.editUserDetailsButton = this.page.locator('#displayName');
  }

  async goto() {
    await this.page.goto('https://qa-extra2-core.qa.gneis.io');
  }

  async loginUser(email: string, password: string) {
    await this.acceptCookiesButton.waitFor();
    await this.acceptCookiesButton.click();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.codeInput.waitFor({ state: 'visible' });
    await this.codeInput.fill('000000');
    await this.confirmButton.click();
    if (await this.skipButton.isVisible()) {
        await this.skipButton.click();
   }

  }



  async registerUser() {
    this.createAccountButton
  }
}