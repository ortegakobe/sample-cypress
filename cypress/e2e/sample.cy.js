// cypress/e2e/sample.cy.js

describe('Sample Cypress Tests - Extended Suite', () => {
  it('passes - basic true assertion', () => {
    expect(true).to.equal(true)
  })

  it('passes - visits the Kitchen Sink example', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink').should('exist')
  })

  // Intentionally failing: wrong expectation
  it('fails - intentional mismatch assertion', () => {
    expect(2 + 2).to.equal(5)
  })

  // Intentionally failing: element that will not be found
  it('fails - non‑existent element', () => {
    cy.visit('https://example.cypress.io')
    cy.get('[data-cy="this-element-does-not-exist"]').should('be.visible')
  })

  // Mixed realistic style tests
  context('Login flow (mocked)', () => {
    it('passes - shows login form', () => {
      cy.visit('https://example.cypress.io/commands/actions')
      cy.contains('Type into a DOM element').should('be.visible')
    })

    // This is a pretend login that is expected to "fail"
    it('fails - mock login error message missing', () => {
      cy.visit('https://example.cypress.io/commands/actions')
      // Intentionally assert an error message that is not there
      cy.contains('Invalid username or password').should('be.visible')
    })
  })

  context('Math utilities (mock)', () => {
    const add = (a, b) => a + b

    it('passes - adds two positive numbers', () => {
      expect(add(2, 3)).to.equal(5)
    })

    it('passes - adds negative and positive number', () => {
      expect(add(-2, 3)).to.equal(1)
    })

    // Intentionally failing: spec expects wrong result
    it('fails - incorrect expected sum', () => {
      expect(add(10, 5)).to.equal(20)
    })
  })
})
