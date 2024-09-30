import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage-po";

test.describe("TC2: Link Status Code verification", () => {
  test("should verify that all links return a successful status code (200 or 30x range)", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    await homePage.goToHomePage();

    const uniqueLinks = await homePage.getAllUniqueLinks();
    for (const link of uniqueLinks) {
      const statusCode = await homePage.verifyHttpStatusOfLink(link);
      expect(statusCode).toBeLessThan(400);
    }
  });
});
