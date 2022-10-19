/// <reference types="Cypress" />

export default class loginPage {
    addLogin(login) {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input')
            .filter(':visible')
            .type(login);
    }

    addPassword(password) {
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input')
            .filter(':visible')
            .type(password);
    }

    clickLoginButton() {
        cy.get('[data-test="login-submit"]')
            .filter(':visible')
            .click({ force: true });
    }

    clickAlrearyHaveALoginLink() {
        cy.get('[data-test="login-register"]')
            .filter(':visible')
            .click({ force: true });
    }

    assertAlertMessage(value = 'Credenciais inválidas') {
        cy.get('[data-test="alert"]')
            .filter(':visible')
            .should('include.text', value);
    }

};