import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

let numA
let numB
let result

Given('I have two numbers {int} and {int}', (a, b) => {
  numA = a
  numB = b
})

When('I add the numbers', () => {
  result = numA + numB
})

Then('the result should be {int}', (expected) => {
  expect(result).to.equal(expected)
})

