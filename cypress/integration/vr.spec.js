/// <reference types="cypress" />

describe('Vr', () => {
    it('devem abrir o site da VR', () => {
        cy.visit('www.vr.com.br');

        cy.get(':nth-child(3) > .vr-main-navigation__link').click();

        cy.get('.vr-hero__actions > .vr-button--negative').click();

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