import { Page } from "@playwright/test";
import { BasePage } from "../pages/BasePage-po";

export class AboutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goToAboutPage() {
    await this.navigate("/fashionhub/about");
  }
}