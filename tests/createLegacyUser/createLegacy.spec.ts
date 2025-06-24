import { test } from '@playwright/test';
import { checkPhone } from '../helper/checkPhone.ts';
import { enrollUserViaWeb } from '../helper/enrollUserViaWebExtra2.0.ts';
import { LoginPage } from '../pages/LoginPage.ts';
import { HomePage } from '../pages/HomePage.ts';
import { verifyUserInCkidAPIFunction } from '../helper/verifyUserInCkidAPIFunction.ts';
import { UserDetailsPage } from '../pages/userDetailsPage.ts';

const phoneNumber = '662969000';

test('create Legacy', async ({ page }) => {
  // await verifyUserInCkidAPIFunction(phoneNumber, false);
  // await checkPhone(page, phoneNumber);
  // await enrollUserViaWeb(page, phoneNumber);
  // await verifyUserInCkidAPIFunction(phoneNumber, true);

  // const loginPage = new LoginPage(page);
  // await loginPage.goto();
  // await loginPage.loginUser(phoneNumber+'@mail.com', 'Test1234,.');

  // const homePage = new HomePage(page);
  // await homePage.editProfile();

  // const userDetailsPage = new UserDetailsPage(page);
  // await userDetailsPage.editUserDetails();
  // await userDetailsPage.deleteUser();

  await verifyUserInCkidAPIFunction(phoneNumber, false);
 
  
});
