Feature: Login functionality

the login functionality is a crucial aspect of any web application.

Scenario: User can login with valid credentials
    Given I navigate to "https://practicetestautomation.com/practice-test-login/"
    And I enter username "student"
    And I enter password "Password123"
    When I click the login button
    Then I should se the page containing "Logged In Successfully"