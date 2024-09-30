import { Page } from "@playwright/test";
import { BasePage } from "../pages/BasePage-po";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goToHomePage() {
    await this.navigate("");
  }

  async getAllUniqueLinks(): Promise<string[]> {
    const links = await this.page.$$eval(
      "a[href]",
      (anchors: HTMLElement[]) => {
        return anchors
          .filter(
            (anchor): anchor is HTMLAnchorElement =>
              anchor instanceof HTMLAnchorElement
          )
          .map((anchor) => anchor.href);
      }
    );

    return [...new Set(links)];
  }

  async verifyHttpStatusOfLink(link: string): Promise<number> {
    const response = await this.page.goto(link);

    if (!response) {
      throw new Error(`Failed to fetch link: ${link}`);
    }

    return response.status();
  }
}
