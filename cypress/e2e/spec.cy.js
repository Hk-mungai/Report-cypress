/// <reference types="cypress" />
describe('frontend',function () { 
  beforeEach(() => {  
      cy.visit('https://testui.thejumba.com/', {
          auth: {
          username: 'jumba-test-user',
          password: '$jumbaDC@2023#',
          }
      });  
  })            
  it('Loads & reloads succesfully', function() {

      cy.title().should("eq","Jumba")
      cy.reload();
      cy.title().should("eq","Jumba")   
      
      cy.get('.jumba-logo--01-1').should("be.visible").should("exist").click({force: true})
      cy.url().should("eq","https://testui.thejumba.com/")
     
  })
})