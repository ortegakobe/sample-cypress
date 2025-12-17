// cypress/e2e/math_bdd.cy.js

describe('Feature: Math utilities', () => {
  const add = (a, b) => a + b

  it('Scenario: Add two positive numbers', () => {
    expect(add(2, 3)).to.equal(5)
  })

  it('Scenario: Add negative and positive number', () => {
    expect(add(-2, 3)).to.equal(1)
  })

  it('Scenario: Add two other numbers', () => {
    expect(add(10, 5)).to.equal(15)
  })
})

