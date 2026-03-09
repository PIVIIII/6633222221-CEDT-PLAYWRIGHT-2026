import { test } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import validInput from '../test-data/valid_input.json';
import { AppointmentPage } from '../page-objects/AppointmentPage';

test('Verify make appointment success', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(process.env.APP_USERNAME, process.env.APP_PASSWORD);

  const appointmentPage = new AppointmentPage(page);
  await appointmentPage.verifyMakeAppointmentPage();
  await appointmentPage.makeAppointment(validInput);
  await appointmentPage.AppointmentSuccess();
});
