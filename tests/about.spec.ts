import { test, expect } from "@playwright/test";
import { AboutPage } from "../pages/AboutPage-po";

test.describe("TC1: Console Error validation", () => {
  test("should not have console errors when visiting FashionHub About page", async ({
    page,
  }) => {
    const aboutPage = new AboutPage(page);

    const consoleErrors = aboutPage.captureConsoleErrors();
    await aboutPage.goToAboutPage();
    await page.waitForLoadState("load");

    const capturedErrors = await consoleErrors;
    expect(capturedErrors).toHaveLength(0);
  });
});
