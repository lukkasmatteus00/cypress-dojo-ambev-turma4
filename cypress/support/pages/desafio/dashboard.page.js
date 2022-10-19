/// <reference types="Cypress" />

export default class dashboardPage {

    clickCreateProfileButton() {
        cy.get('[data-test="dashboard-createProfile"]')
            .filter(':visible')
            .click({ force: true });
    }

    assertWellcome(value = 'Bem-vindo') {
        cy.get('[data-test="dashboard-welcome"]')
            .filter(':visible')
            .scrollIntoView()
            .should('include.text', value);
    }

    assertTitle(value = 'Dashboard') {
        cy.get('[class="large text-primary"]')
            .filter(':visible')
            .scrollIntoView()   
            .should('include.text', value);
    }

    assertConfirmProfile(value = 'Você não tem um perfil criado, por favor adicione algumas informações') {
        cy.get('[data-test="dashboard-noProfile"]')
            .filter(':visible')
            .scrollIntoView()   
            .should('include.text', value);
    }

    assertAlertMessage(value = 'Perfil Criado') {
        cy.get('[data-test="alert"]')
            .filter(':visible')
            .scrollIntoView()   
            .should('include.text', value);
    }
};