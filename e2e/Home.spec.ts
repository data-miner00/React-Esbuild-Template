import { test, expect } from "@playwright/test";

const baseUrl = "/";

test.describe("Home page", () => {
  test("has title", async ({ page }) => {
    await page.goto(baseUrl);

    await expect(page).toHaveTitle(/React ESBuild/);
  });

  test("open reference pane when click on pane switch", async ({ page }) => {
    await page.goto(baseUrl);

    await page.getByTestId("pane-switch").click();

    const pane = page.getByTestId("pane");

    await expect(pane).toContainText(/Development Reference/);
  });
});
