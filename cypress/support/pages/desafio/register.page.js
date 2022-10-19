/// <reference types="Cypress" />

export default class registerPage {

    addName(name) {
        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input')
            .filter(':visible')
            .type(name);
    }

    addEmail(email) {
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input')
            .filter(':visible')
            .type(email);
    }

    addPassword(password = '123@Test') {
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input')
            .filter(':visible')
            .type(password);
    }

    addConfirmPassword(password = '123@Test') {
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input')
            .filter(':visible')
            .type(password);
    }

    clickButtonRegister() {
        cy.get('[data-test="register-submit"]')
            .filter(':visible')
            .click({ force: true });
    }

    clickLinkAlrearyHaveALogin() {
        cy.get('[data-test="register-login"]')
            .filter(':visible')
            .click({ force: true });
    }
    assertAlertMessage(value = 'Usuário já registrado') {
        cy.get('[data-test="alert"]')
            .filter(':visible')
            .should('include.text', value);
    }
};