const { expect, assert } = require("chai");
const gmailLogin = require("../pageobjects/gmailLogin");

describe("Testing functionalities of login page", () => {
  it("checks if an error is shown when user tries to login with invalid credentials", async () => {
    assert.equal(await gmailLogin.gmailLoginDetails(), "Inbox");
  });
  it("checks if an error is shown when user tries to click on QuickSettingsButton", async () => {
    await gmailLogin.QuickSettings();
  });
  it("checks if an error is shown when user tries to click on SearchMailButton", async () => {
    assert.equal(await gmailLogin.SearchMail(), "Outlook");
  });
  it("checks if an error is shown when user tries to composeMail", async () => {
    await gmailLogin.composeMail();
  });
});
