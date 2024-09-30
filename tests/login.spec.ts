import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage-po";

test.describe("TC3: Login Functionality", () => {
  test("should allow customer to log in successfully with valid credentials", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const username = process.env.USERNAME as string;
    const password = process.env.PASSWORD as string;

    await loginPage.goToLoginPage();
    await loginPage.login(username, password);

    const loginSuccess = await loginPage.isLoginSuccessful();
    expect(loginSuccess).toBe(true);
  });
});
