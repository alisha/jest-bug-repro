require('expect-puppeteer');

describe("Google", () => {
  beforeAll(async () => {
    await page.goto("http://google.com");
  });

  it('should display "Google" text on page', async () => {
    await expect(page).toMatchTextContent("Google");
  });
});