Feature: Math utilities
  As a developer
  I want to verify simple math operations
  So that I know my utilities work

  Scenario: Add two positive numbers
    Given I have two numbers 2 and 3
    When I add the numbers
    Then the result should be 5

  Scenario: Add negative and positive number
    Given I have two numbers -2 and 3
    When I add the numbers
    Then the result should be 1

  Scenario: Add two other numbers
    Given I have two numbers 10 and 5
    When I add the numbers
    Then the result should be 15

