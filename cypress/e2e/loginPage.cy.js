import { loginAction } from "../support/page_object/login";
import { navigateTo } from "../support/page_object/navigation";


describe('My Account - Login', () => {
    beforeEach('open site', () => {
      cy.openHomePage();    
    });

    it('Log-in with valid username and password', () => {
        navigateTo.myAccountPage();
        loginAction.enterValidEmail('stacy_test@mail.com');
        loginAction.enterValidPassword('ABC-test_911');
        loginAction.submitLogin();
        loginAction.verifyUserLogin('stacy_test');

    })
});