import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I have a boolean value', () => {
  cy.wrap(true).as('boolValue')
})

When('I check if it is true', () => {
  cy.get('@boolValue').then((val) => {
    expect(val).to.equal(true)
  })
})

Then('it should be true', () => {
  cy.get('@boolValue').should('equal', true)
})

Given('I open the Kitchen Sink example page', () => {
  cy.visit('/')
})

Then('I should see the Kitchen Sink text', () => {
  cy.contains('Kitchen Sink').should('exist')
})

