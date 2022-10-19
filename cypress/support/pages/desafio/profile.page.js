/// <reference types="Cypress" />

export default class profilePage {

    assertTitle(value = 'Crie Seu Perfil') {
        cy.get('[class="large text-primary"]')
            .filter(':visible')
            .should('include.text', value);
    }

    assertDescription(value = 'Vamos coletar algumas informações para fazer seu perfil se destacar') {
        cy.get('[class="fas fa-user"]')
            .filter(':visible')
            .should('include.text', value);
    }

    selectSatus(name = 'QA Pleno') {
        cy.get('#mui-component-select-status').click();

        cy.get('.MuiList-root').find(`li[data-value="${name}"]`)
            .filter(':visible')
            .click();
    }

    addCompany(company) {
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input')
            .filter(':visible')
            .type(company);
    }

    addWebSite(webSite) {
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input')
            .filter(':visible')
            .type(webSite);
    }
    assertAlertWebsite(alert = 'Digite uma url válida') {
        cy.get('.MuiFormHelperText-root')
            .filter(':visible')
            .should('include.text', alert);
    }
    addLocation(location) {
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input')
            .filter(':visible')
            .type(location);
    }

    addSkills(skill) {
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input')
            .filter(':visible')
            .type(skill);
    }

    addGitUser(user) {
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input')
            .filter(':visible')
            .type(user);
    }

    addBio(bio) {
        cy.get('[data-test="profile-bio"] > .MuiInputBase-root')
            .filter(':visible')
            .type(bio);
    }

    clickButtonCreateProfile() {
        cy.get('[data-test="profile-submit"]')
            .filter(':visible')
            .click({ force: true });
    }

    clickButtonDashboard() {
        cy.get('[data-test="profile-dashboard"]')
            .filter(':visible')
            .click({ force: true });
    }

    clickButtonAddSocialMedia() {
        cy.get('[data-test="profile-socials"]')
            .filter(':visible')
            .click({ force: true });
    }
};