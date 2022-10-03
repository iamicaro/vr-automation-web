/// <reference types="cypress" />

describe('Vr', () => {
    it('devem abrir o site da VR', () => {
        //abrir site da VR
        cy.visit('www.vr.com.br');

        //acessar página PARA VOCÊ
        cy.get(':nth-child(3) > .vr-main-navigation__link').click();

        //acessar mapa de localização de estabelecimentos
        cy.get('.vr-hero__actions > .vr-button--negative').click();

        //pesquisar por cidade
        cy.get('#endereco').type('Barueri');
        cy.get('[data-place-id]').first().click();
        cy.get('#buttonFiltrar').click();
        cy.get('.vr-map__card--title').first().click();
        cy.get('#buttonFiltrarCards').click();
        cy.get('#buscarResultados').click();
    });

    it('verifico abertura do google maps', () => {
        cy.get('#list-estab').should('exist')
    });
});