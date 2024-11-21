Feature: Buy Tour Tickets functionality

  Scenario Outline: Test Buy Tour Tickets functionality
    Given the user is logged in
    When the user navigates to Tour Page
    When the Tour Page is displayed
    When the user clicks the Buy Tickets button <position>
    Then the user should see the Ticket Purchase Window
    When the user enters "<quantity>" and "<contact>" in buy tickets form
    When the user clicks the Pay button
    Then the user should see the Ticket Results page
    Then the user clicks the Close button

    Examples:
      | position     | quantity     | contact               |
      | 0            | 1            | test@test.com         |
      | 1            | 500          | test@test.com         |
      | 2            | 100          | test@test.com         |
      | 0            |              |                       |
      | 0            | 10           |                       |
      | 0            |              | test@test.com         |


Scenario Outline: Cancel Buy Tour Tickets flow
    Given the user is logged in
    When the user navigates to Tour Page
    When the Tour Page is displayed
    When the user clicks the Buy Tickets button 0
    Then the user should see the Ticket Purchase Window
    When the user enters "1" and "test@test.com" in buy tickets form
    When the user clicks the Close button on Ticket Purchase window
    Then the user should see the tour page