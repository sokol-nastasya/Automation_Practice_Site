export class Registration {
    enterValidEmail(email) {
        cy.get('#reg_email')
            .should('be.visible')
            .click()
            .type(email);
    };

    enterValidPassword(password) {
        cy.get('#reg_password')
            .should('be.visible')
            .type(password);

    };

    submitRegistration() {
        cy.get('[name="register"]')
            .should('be.visible')
            .click();
    };

    verifyThatUserLogin() {
        cy.get('.woocommerce-MyAccount-content').contains(`Hello ${username} (not ${username}? Sign out)`);
    }

}

export const registrationAction = new Registration();