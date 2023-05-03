/// <reference types="cypress" />
describe('Loads succesfully', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('eq','http://localhost:3000/')
   

  })
})