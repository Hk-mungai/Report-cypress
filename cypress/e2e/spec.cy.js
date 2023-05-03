/// <reference types="cypress" />
describe('Loads succesfully', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('eq','http://localhost:3000/')
    cy.get('#root > div > header > a').should('have.text','Learn React').and('be.visible').and('exist')

  })
})