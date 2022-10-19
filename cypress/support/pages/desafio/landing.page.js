/// <reference types="Cypress" />

export default class landingPage {

    clickRegisterButton() {
        cy.get('[data-test="landing-register"]')
            .filter(':visible')
            .click({ force: true });
    }

    clickLoginButton() {
        cy.get('[data-test="landing-login"]')
            .filter(':visible')
            .click({ force: true });
    }

    assertTitle(value) {
        cy.get('[data-test="landing-title"]')
            .filter(':visible')
            .should('include.text', value);
    }

    assertDescriptionText(value) {
        cy.get('[data-test="landing-subtitle"]')
            .filter(':visible')
            .should('include.text', value);
    }

};