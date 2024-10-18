export class LoginUser {
    enterValidEmail (email) {
        cy.get('#username')
            .should('be.visible')
            .click()
            .type(email);
    };

    enterValidPassword(password) {
        cy.get('#password')
            .should('be.visible')
            .click()
            .type(password);
    };

    submitLogin() {
        cy.get('[name="login"]')
            .should('be.visible')
            .click();
    };

    verifyUserLogin(username) {
        cy.get('.woocommerce-MyAccount-content').contains(`Hello ${username} (not ${username}? Sign out)`);
    }
};

export const loginAction = new LoginUser();