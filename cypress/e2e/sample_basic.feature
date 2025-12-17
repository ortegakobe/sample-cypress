Feature: Basic sample tests
  As a tester
  I want to run simple BDD scenarios
  So that I can see results per feature

  Scenario: Basic true assertion
    Given I have a boolean value
    When I check if it is true
    Then it should be true

  Scenario: Visit the Kitchen Sink example
    Given I open the Kitchen Sink example page
    Then I should see the Kitchen Sink text

