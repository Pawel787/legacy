import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-circlekid-core.qa.gneis.io/#/login?redirect=%7B%22name%22:%22main.authorizeApp%22,%22params%22:%7B%22clientId%22:%22b533bdb7-4b0e-3444-969b-105c7cf7a08d%22,%22scope%22:%22USER%22,%22redirectUrl%22:%22https%253A%252F%252Fqa-extra2-core.qa.gneis.io%252Fapi%252Fv1%252Funres%252FauthorizationCode%22,%22requiredRegistrationFields%22:%22BIRTHDATE%22,%22authenticationType%22:%22DEFAULT%22,%22state%22:%22login-00d51639-0629-462e-8d95-556494320d28%22%7D%7D&requiredRegistrationFields=BIRTHDATE');
  await page.getByRole('button', { name: 'USE NECESSARY COOKIES ONLY' }).click();
});