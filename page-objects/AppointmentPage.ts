import { Page, expect } from '@playwright/test';
import facilities from '../test-data/fixtures/facilities.json';
import programs from '../test-data/fixtures/programs.json';

export class AppointmentPage {
  constructor(private page: Page) {}

  async verifyPageHeader() {
    await expect(
      this.page.getByRole('heading', { name: 'Make Appointment' }),
    ).toBeVisible();
  }

  async verifyFacilityOptions() {
    const facility = this.page.getByLabel('Facility');
    await expect(facility).toBeVisible();

    for (const option of facilities) {
      await facility.selectOption({ label: option });
      await expect(facility).toHaveValue(option);
    }
  }

  async verifyReadmissionCheckbox() {
    const checkbox = this.page.getByLabel('Apply for hospital readmission');
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }

  async verifyHealthcareProgram() {
    for (const program of programs) {
      const radio = this.page.getByLabel(program);
      await radio.check();
      await expect(radio).toBeChecked();
    }
  }

  async verifyVisitDate() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB');

    const dateInput = this.page.getByLabel('Visit Date (Required)');
    await dateInput.fill(formattedDate);
    await expect(dateInput).toHaveValue(formattedDate);
  }

  async verifyComment() {
    const comment = this.page.getByLabel('Comment');
    await comment.fill('Automation Test Comment');
    await expect(comment).toHaveValue('Automation Test Comment');
  }

  async verifyBookAppointmentButton() {
    const button = this.page.getByRole('button', { name: 'Book Appointment' });
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
  }
}
