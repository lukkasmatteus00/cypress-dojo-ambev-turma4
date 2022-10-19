/// <reference types="Cypress" />

export default class mainNavbarPage {

    clickQAsNavBarLink() {
        cy.get('[data-test="navbar-QAs"]')
            .filter(':visible')
            .click({ force: true });
    }

    clickAboutNavBarLink() {
        cy.get('[data-test="navbar-about"]')
            .filter(':visible')
            .click({ force: true });
    }

    clickRegisterNavBarLink() {
        cy.get('[data-test="navbar-register"]')
            .filter(':visible')
            .click({ force: true });
    }

    clickLoginNavBarLink() {
        cy.get('[data-test="navbar-login"]')
            .filter(':visible')
            .click({ force: true });
    }

    clickLogoutNavBarLink() {
        cy.get('[data-test="navbar-logout"]')
            .filter(':visible')
            .click({ force: true });
    }

};