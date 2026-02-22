import { test } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import validUser from '../test-data/users/valid-user.json';
import invalidUser from '../test-data/users/invalid-user.json';

test.describe('EX01 - Arrange Act Assert - Login Test', () => {
  test('Verify login pass with valid user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.clickMakeAppointment();
    await loginPage.login(validUser.username, validUser.password);

    await loginPage.verifyLoginSuccess();
  });

  test('Verify login fail with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.clickMakeAppointment();
    await loginPage.login(validUser.username, invalidUser.password);

    await loginPage.verifyLoginFail();
  });

  test('Verify login fail with invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.clickMakeAppointment();
    await loginPage.login(invalidUser.username, validUser.password);

    await loginPage.verifyLoginFail();
  });
});
