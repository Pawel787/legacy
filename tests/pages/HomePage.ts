  import { Page, Locator, expect } from '@playwright/test';

  export class HomePage {
    readonly page: Page;
    readonly editUserDetailsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.editUserDetailsButton = this.page.locator('#displayName');
    }
  
  async editProfile() {
   await expect(this.editUserDetailsButton).toBeVisible();
   await expect(this.editUserDetailsButton).toBeEnabled();
   await this.editUserDetailsButton.click();
  }
}