const { assert } = require("chai");

class gmailLogin {
  // gmailLoginDetails
  async gmailLoginDetails() {
    await browser.url(
      "https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
    );

    await (
      await browser.$("#identifierId")
    ).waitForDisplayed({
      timeout: 3000,
      timeoutMsg: `The username text not displayed`,
    });

    await (
      await browser.$("#identifierId")
    ).setValue("automationchallenge6@gmail.com");
    await (
      await browser.$(
        ".qhFLie > #identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d"
      )
    ).click();

    await (
      await browser.$("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input")
    ).waitForDisplayed({
      timeout: 3000,
      timeoutMsg: `The password text not displayed`,
    });

    await (
      await browser.$("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input")
    ).setValue("AccionLabs");
    await (
      await browser.$(".enBDyd div")
    ).waitForDisplayed({
      timeout: 3000,
      timeoutMsg: `The checkBox text not displayed`,
    });

    await (await browser.$(".enBDyd div")).click();
    await (
      await browser.$("#passwordNext > div > button > span")
    ).waitForDisplayed({
      timeout: 3000,
      timeoutMsg: `The checkBox text not displayed`,
    });

    await (await browser.$("#passwordNext > div > button > span")).click();

    return await (
      await browser.$('[href="https://mail.google.com/mail/u/0/#inbox"]')
    ).getText();
  }

  //QuickSettings
  async QuickSettings() {
    await (await browser.$(".FI a.FH svg")).click();
    await (await browser.$(".VM label.QX")).click();
    await (await browser.$(".Q0 button.OB")).click();
    await (await browser.$(".gb_rc img.gb_xc")).getText();
  }
  //SearchMail
  async SearchMail() {
    await (
      await browser.$("#gs_lc50 > input:nth-child(1)")
    ).waitForDisplayed({
      timeout: 3000,
      timeoutMsg: `The SearchMail text not displayed`,
    });

    await (
      await browser.$("#gs_lc50 > input:nth-child(1)")
    ).setValue("Hi this Nagarjuna");

    await browser
      .$("#aso_search_form_anchor > button.gb_lf.gb_mf > svg")
      .click();
    await (
      await browser.$("#aso_search_form_anchor > button.gb_lf.gb_mf > svg")
    ).waitForDisplayed({
      timeout: 3000,
      timeoutMsg: `The SearchMail text not displayed`,
    });

    await (
      await browser.$("#aso_search_form_anchor > button.gb_lf.gb_mf > svg")
    ).click();
    await browser.$(".zA .bA4 .yP span.il").click();
    return await (
      await browser.$('[href="http://aka.ms/weboutlook"]')
    ).getText();
  }
  ///composeMail
  async composeMail() {
    await browser.$(".aic .z0 div").click();
    await browser.$(".oj div textarea").setValue("arjunchowdary.d@outlook.com");
    await browser.$(".aoD.az6 input").setValue("AccionLabs");
    await browser
      .$(".Ar.Au div")
      .setValue(
        "Congratulations, you have been selected to join the AccionLabs"
      );
    await browser.$(".gU div.dC").click();
  }
}

module.exports = new gmailLogin();
