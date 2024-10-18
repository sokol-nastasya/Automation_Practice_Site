import { navigateTo } from "../support/page_object/navigation";
import { registrationAction } from "../support/page_object/registration";


describe('My Account - Registration', () => {
    beforeEach('open site', () => {
        cy.openHomePage();
    });
    
    it('Registration - Sign-in', () => {
        navigateTo.myAccountPage();
        registrationAction.enterValidEmail('stacy_test@mail.com');
        registrationAction.enterValidPassword('ABC-test_911');
        registrationAction.submitRegistration();
        registrationAction.verifyThatUserLogin();

    });
})