import { test } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { AppointmentPage } from '../page-objects/AppointmentPage';
import validUser from '../test-data/users/valid-user.json';

test.describe('EX02 - Assertion Test', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.clickMakeAppointment();
    await loginPage.login(validUser.username, validUser.password);
  });

  test('Verify that make appointment page display "Make Appointment" in h2', async ({
    page,
  }) => {
    const appointmentPage = new AppointmentPage(page);
    await appointmentPage.verifyPageHeader();
  });

  test('Verify that can select all facility combo boxes', async ({ page }) => {
    const appointmentPage = new AppointmentPage(page);
    await appointmentPage.verifyFacilityOptions();
  });

  test('Verify that can select apply for hospital readmission checkbox', async ({
    page,
  }) => {
    const appointmentPage = new AppointmentPage(page);
    await appointmentPage.verifyReadmissionCheckbox();
  });

  test('Verify that can select health care program radio button', async ({
    page,
  }) => {
    const appointmentPage = new AppointmentPage(page);
    await appointmentPage.verifyHealthcareProgram();
  });

  test('Verify that can input current date on Visit Date', async ({ page }) => {
    const appointmentPage = new AppointmentPage(page);
    await appointmentPage.verifyVisitDate();
  });

  test('Verify that can input comment', async ({ page }) => {
    const appointmentPage = new AppointmentPage(page);
    await appointmentPage.verifyComment();
  });

  test('Verify that book appointment button is displayed and enabled', async ({
    page,
  }) => {
    const appointmentPage = new AppointmentPage(page);
    await appointmentPage.verifyBookAppointmentButton();
  });
});
