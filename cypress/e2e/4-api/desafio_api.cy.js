/// <reference types="cypress"/>

let access_token;
describe('Funcionalidade API login', () => {

    beforeEach(() => {
        cy.fixture("usuario").then((user) => {
            const { email, senha } = user;
            cy.gerarToken(email, senha).then((tkn) => {
                access_token = tkn
            })
        })
    });
    it('[GET] Deve selecionar o usuário logado', () => {
        cy.request({
            method: "GET",
            url: "/api/auth",
            headers: {
                cookie: access_token,
            },
        }).then((response) => {
            const { status, body: { email, name } } = response;
            expect(status).to.equal(200);
            cy.fixture("usuario").then((user) => {
                expect(email).to.be.equal(user.email);
                expect(name).to.be.equal(user.nome);
            })
        });
    });
});

describe('Funcionalidade API Perfil, experiência profssional', () => {
    let _id = '';
    let experienceValue = [];
    beforeEach(() => {
        cy.fixture("usuario").then((user) => {
            const { email, senha } = user;
            cy.gerarToken(email, senha).then((tkn) => {
                access_token = tkn
            })
        })
        // incluir uma nova experiencia
        cy.request({
            method: "PUT",
            url: "/api/profile/experience",
            headers: {
                cookie: access_token,
            },
            body: {
                title: "Tester",
                company: "Ambev tech",
                location: "São Paulo - SP",
                from: "2021-09-07T23:04:00.000Z",
                current: true,
                to: null,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            }
        }).then((response) => {
            const { status, body: { experience } } = response;
            expect(status).to.equal(200);
            _id = experience[0]._id;
            experienceValue = experience;
        })

    });
    it('[DELETE] Deve deletar uma experiência profissional', function() {
        // realizar a exclusão
        cy.request({
            method: "DELETE",
            url: `/api/profile/experience/${_id}`,
            headers: {
                cookie: access_token,
            }
        }).then((response) => {
            const { status, body } = response;
            expect(status).to.equal(200);
            cy.log(body);
            expect(body.experience.length).to.lt(experienceValue.length);

            // garantir que de fato foi apagado
            const hasId = body.experience.find(item => item._id === _id);
            expect(hasId).to.be.undefined;
        })
    });
});

describe('Funcionalidade API perfil, educação', () => {
    let _id = '';
    let educationValue = [];
    beforeEach(() => {
        cy.fixture("usuario").then((user) => {
            const { email, senha } = user;
            cy.gerarToken(email, senha).then((tkn) => {
                access_token = tkn
            })
        })

    });

    it('[PUT] Deve adicionar uma formação acadêmica', function () {
        cy.request({
            method: "PUT",
            url: "/api/profile/education",
            headers: {
                cookie: access_token,
            },
            body: {
                school: "Escola tecnica",
                degree: "Tecnico",
                fieldofstudy: "Informatica",
                from: "2021-07-06T23:22:00.000Z",
                current: true,
                to: null,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            }
        }).then((response) => {
            const { status, body: { education } } = response;
            expect(status).to.equal(200);
            _id = education[0]._id;
            educationValue = education;
            expect(education).to.be.not.empty;
            expect(education.length).to.gte(1);
        })
    });

    it('[DELETE] Deve deletar uma formação acadêmica', function () {

        cy.request({
            method: "DELETE",
            url: `/api/profile/education/${_id}`,
            headers: {
                cookie: access_token,
            }
        }).then((response) => {
            const { status, body } = response;
            expect(status).to.equal(200);
            cy.log(body);
            expect(body.education.length).to.lt(educationValue.length);

            // garantir que de fato foi apagado
            const hasId = body.education.find(item => item._id === _id);
            expect(hasId).to.be.undefined;
        })

    });
});