let accountPageSelectors = require("../../selector.json")["desktop"];

describe('SnapAV Test Case Example', function () {
  it('Verifies SnapAV Login Page', function () {
    cy.visit('https://app.beta.ovrc.com/#/')
        .get('img')
        .get('div:nth-child(1) > div.inputWrapper_1-grGzUFUTrbgzX_VnWdA7 > input')
        .get('div:nth-child(2) > div.inputWrapper_1-grGzUFUTrbgzX_VnWdA7 > input')
        .get('#button__login')
        .get('#button__createAccount')
        .get('#button__forgotPassword');
  });
  it('Verifies Login to SnapAV', function (){
    cy.get('div:nth-child(1) > div.inputWrapper_1-grGzUFUTrbgzX_VnWdA7 > input').type('joseph.barsness@gmail.com')
      .get('div:nth-child(2) > div.inputWrapper_1-grGzUFUTrbgzX_VnWdA7 > input').type('snapAVPassword1')
      .get('#button__login').click()
      .wait(3000);
  });
  it('Verifies Create a New Account Page', function (){
    cy.visit('https://app.beta.ovrc.com/#/')
        .get("#button__createAccount").click()
        .get(accountPageSelectors.newAccountPage);
  });
});
