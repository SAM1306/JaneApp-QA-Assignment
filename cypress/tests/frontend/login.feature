Feature: Login functionality

  Scenario Outline: Test login with valid and invalid credentials
    Given the login page is displayed
    When I enter "<username>" and "<password>"
    And I click the login button
    Then I should see "<expectedMessage>" page

    Examples:
      | username       | password     | expectedMessage    |
      | test           | test         | THE BAND           |
      | invalidUser    | validPass123 | 404 Not Found      |
      | test           | validPass123 | 404 Not Found      |
      | invalidUser    | test         | 404 Not Found      |
      | TEST           | TEST         | 404 Not Found      |
