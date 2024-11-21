Feature: Login functionality

  Scenario Outline: Test login with valid credentials
    Given the login page is displayed
    When the user enters "<username>" and "<password>"
    When the user clicks the login button
    Then the user should see "<expectedMessage>" page

    Examples:
      | username       | password     | expectedMessage    |
      | test           | test         | THE BAND           |

Scenario Outline: Test login with invalid credentials
    Given the login page is displayed
    When the user enters "<username>" and "<password>"
    When the user clicks the login button
    Then the user should see "<expectedMessage>" page
    When the user clicks the back button
    Then the user is navigated back to Login Page 

    Examples:
      | username       | password     | expectedMessage    |
      | invalidUser    | validPass123 | 404 Not Found      |
      | test           | validPass123 | 404 Not Found      |
      | invalidUser    | test         | 404 Not Found      |
      | TEST           | TEST         | 404 Not Found      |

Scenario Outline: Test login with empty credentials
    Given the login page is displayed
    When the user enters "<username>" and "<password>"
    When the user clicks the login button
    Then the user should see missing field tooltip for "<username>" and "<password>"

    Examples:
      | username       | password     |
      | test           |              |
      |                | test         |
      |                |              |