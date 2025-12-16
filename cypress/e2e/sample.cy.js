// cypress/e2e/sample.cy.js

describe('Sample Test', () => {
  it('visits the Cypress example page', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
  })
})

