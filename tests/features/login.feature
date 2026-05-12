Feature: Login functionality

#the login functionality is a crucial aspect of any web application.


@smoke
Scenario: User can login with valid credentials
    Given I navigate to "https://practicetestautomation.com/practice-test-login/"
    And I enter username "student"
    And I enter password "Password123"
    When I click the login button
    Then I should se the page containing "Logged In Successfully"

@regression
Scenario Outline: Fail login with invalid credentials
    Given I navigate to "https://practicetestautomation.com/practice-test-login/"
    And I enter username "<username>"
    And I enter password "<password>"
    When I click the login button
    Then I should se the error message "<errorMessage>"

Examples:
| username  | password      | errorMessage              |
| student   | wrongPassword | Your password is invalid! |
| wrongUser | Password123   | Your username is invalid! |
| wrongUser | wrongPassword | Your username is invalid! |