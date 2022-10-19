// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import RegisterPage from '../support/pages/desafio/register.page';
import ProfilePage from '../support/pages/desafio/profile.page';

const registerPage = new RegisterPage();
const profilePage = new ProfilePage();

Cypress.Commands.add("login", (email, senha) => {
  cy.visit("/login");
  cy.get(
    '[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input'
  ).type(email);
  cy.get(
    '[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input'
  ).type(senha);
  cy.get('[data-test="login-submit"]').click();
});

Cypress.Commands.add("gerarToken", (email, senha) => {
  cy.request({
    method: "POST",
    url: "/api/auth",
    body: {
      email: email,
      password: senha,
    },
  }).then((response) => {
    return response.body.jwt
  });
});

Cypress.Commands.add("createAccount", (name, email) => {
  registerPage.addName(name);
  registerPage.addEmail(email);
  registerPage.addPassword();
  registerPage.addConfirmPassword();
  registerPage.clickButtonRegister();
})

Cypress.Commands.add("createProfile", (object) => {
  const { status, company, website, location, skills, gitUser, bio } = object;

  profilePage.selectSatus(status);
  profilePage.addCompany(company);
  profilePage.addWebSite(website);
  profilePage.addLocation(location);
  profilePage.addSkills(skills);
  profilePage.addGitUser(gitUser);
  profilePage.addBio(bio);

  profilePage.clickButtonCreateProfile();
})
