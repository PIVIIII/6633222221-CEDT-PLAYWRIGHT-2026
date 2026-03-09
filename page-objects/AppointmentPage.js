import { expect } from '@playwright/test';
import Field from '../test-data/field_header.json';

export class AppointmentPage {
  constructor(page) {
    this.page = page;
  }

  async verifyMakeAppointmentPage() {
    await expect(
      this.page.getByRole('heading', { name: 'Make Appointment' }),
    ).toBeVisible();
  }
  async makeAppointment(validInput) {
    await this.page
      .getByLabel(Field.facility.label)
      .selectOption(validInput.facility);

    await this.page
      .getByRole(Field.readmission.role, {
        name: Field.readmission.name,
      })
      .check();

    await this.page
      .getByRole(Field.healthcareProgram.role, {
        name: validInput.healthcareProgram,
      })
      .check();

    await this.page.locator(Field.visitDate.locator).click();

    await this.page
      .getByRole(Field.visitDate.day.role, {
        name: validInput.visitDate.day,
      })
      .click();

    await this.page
      .getByRole(Field.comment.role, { name: Field.comment.name })
      .click();

    await this.page
      .getByRole(Field.comment.role, { name: Field.comment.name })
      .fill(validInput.comment);

    await this.page
      .getByRole(Field.submit.role, { name: Field.submit.name })
      .click();
  }

  async AppointmentSuccess() {
    await expect(
      this.page.getByRole('heading', { name: 'Appointment Confirmation' }),
    ).toBeVisible();
  }
}
