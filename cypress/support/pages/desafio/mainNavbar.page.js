/// <reference types="Cypress" />

export default class mainNavbarPage {

    clickNavBarLinkQAs() {
        cy.get('[data-test="navbar-QAs"]')
            .filter(':visible')
            .click({ force: true });
    }

    clickNavBarLinkAbout() {
        cy.get('[data-test="navbar-about"]')
            .filter(':visible')
            .click({ force: true });
    }

    clickNavBarLinkRegister() {
        cy.get('[data-test="navbar-register"]')
            .filter(':visible')
            .click({ force: true });
    }

    clickNavBarLinkLogin() {
        cy.get('[data-test="navbar-login"]')
            .filter(':visible')
            .click({ force: true });
    }

    clickNavBarLinkLogout() {
        cy.get('[data-test="navbar-logout"]')
            .filter(':visible')
            .click({ force: true });
    }

};