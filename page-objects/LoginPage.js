export class LoginPage {
  constructor(page) {
    this.page = page;
    this.url = process.env.URL || 'https://katalon-demo-cura.herokuapp.com/';
  }

  async login(username, password) {
    await this.page.goto(this.url);

    await this.page.getByRole('link', { name: 'Make Appointment' }).click();
    await this.page.locator('#txt-username').fill(username);
    await this.page.locator('#txt-password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}
