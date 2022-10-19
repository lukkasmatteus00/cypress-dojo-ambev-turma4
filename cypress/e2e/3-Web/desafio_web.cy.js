/// <reference types="cypress" />

import RegisterPage from '../../support/pages/desafio/register.page';
import LandingPage from '../../support/pages/desafio/landing.page';
import LoginPage from '../../support/pages/desafio/login.page';
import DashboardPage from '../../support/pages/desafio/dashboard.page';
import ProfilePage from '../../support/pages/desafio/profile.page';
import MainNavbar from '../../support/pages/desafio/mainNavbar.page';

const registerPage = new RegisterPage();
const landingPage = new LandingPage();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const profilePage = new ProfilePage();
const mainNavbar = new MainNavbar();

const faker = require('faker-br')

describe('Funcionalidade Cadastro:', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('Deve validar mensagem de alerta quando cadastrar usuário com email repetido', () => {
        landingPage.clickButtonRegister();

        registerPage.addName(faker.name.findName());
        registerPage.addEmail('testedojo@dojo.com');
        registerPage.addPassword();
        registerPage.addConfirmPassword();
        registerPage.clickButtonRegister();
        registerPage.assertAlertMessage('Usuário já registrado');
    });
});

describe('Funcionalidade login:', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve realizar o login sem sucesso', () => {
        landingPage.clickButtonLogin();

        cy.fixture("usuario").then((user) => {
            const { email, senha } = user;
            loginPage.addLogin(email);
            loginPage.addPassoword(`${senha}fail`);
            loginPage.clickButtonLogin();
            loginPage.assertAlertMessage('Credenciais inválidas');
        })
    });
});

describe('Funcionalidade criar perfil:', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    afterEach(() => {
        mainNavbar.clickNavBarLinkLogout();
    });
    
    it('Deve criar perfil com sucesso', () => {
        landingPage.clickButtonRegister();
        cy.createAccount(faker.name.findName(), faker.internet.email()); // uso do comando

        dashboardPage.assertConfirmProfile();
        dashboardPage.assertTitle();
        dashboardPage.assertWellcome();
        dashboardPage.clickButtonCreateProfile();

        cy.fixture("profileForm").then((profile) => {
            cy.createProfile(profile); // uso do comando
        })

        dashboardPage.assertWellcome();
        dashboardPage.assertAlertMessage('Perfil Criado');
    });

    it('Deve validar mensagem de erro ao cadastrar com site errado', () => {
        landingPage.clickButtonRegister();
        cy.createAccount(faker.name.findName(), faker.internet.email()); // uso do comando

        dashboardPage.clickButtonCreateProfile();
        cy.fixture("profileForm").then((profile) => {
            const { status, company, location} = profile;
            profilePage.selectSatus(status);
            profilePage.addCompany(company);
            profilePage.addWebSite('website.com');
            profilePage.addLocation(location);
            profilePage.assertAlertWebsite('Digite uma url válida');

        })
    });
});