import { Page, Locator } from "@playwright/test";
import { BasePage } from "../pages/BasePage-po";

export class LoginPage extends BasePage {
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('input[id="username"]');
    this.passwordInput = page.locator('input[id="password"]');
    this.loginButton = page.locator('input[type="submit"]');
    this.successMessage = page.locator(
      '//h2[contains(text(),"Welcome, testUser!")]'
    );
  }

  async goToLoginPage() {
    await this.navigate("/fashionhub/login.html");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async isLoginSuccessful(): Promise<boolean> {
    return this.successMessage.isVisible();
  }
}
