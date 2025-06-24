import { Page, Locator } from "@playwright/test";

export class UserDetailsPage {
  readonly page: Page;
  readonly editUserDetailsButton: Locator;
  readonly deleteUserButton: Locator;
  readonly deleteUserInputConfirmation: Locator;
  readonly deleteUserInCircleButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.editUserDetailsButton = page.getByRole('button', { name: 'Edytuj swoje dane osobowe' });
    this.deleteUserButton = page.getByRole('button', { name: 'Chcesz usunąć konto w Circle' });
    this.deleteUserInputConfirmation = page.getByLabel('', { exact: true });
    this.deleteUserInCircleButton = page.getByRole('button', { name: 'Usuń konto w Circle K ID' });
  }

  async editUserDetails() {
    await this.editUserDetailsButton.waitFor();
    await this.editUserDetailsButton.click();
  }

  async deleteUser() {
    await this.deleteUserButton.click();
    await this.deleteUserInputConfirmation.fill('Usuń moje konto');
    await this.deleteUserInCircleButton.click();
  }
}