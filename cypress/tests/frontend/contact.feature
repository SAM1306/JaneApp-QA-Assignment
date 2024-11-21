Feature: Contact Form functionality

  Scenario Outline: Test Contact Form functionality
    Given the user is logged in
    When the user navigates to Contact Page
    When the Contact Page is displayed
    When the user enters "<name>", "<email>" and "<message>" in the contact form
    When the user clicks the send button
    Then the contact form is submitted and the alert window is visible

    Examples:
      | name       | email     | message               |
      | test       | test      | Tour Details          |
      |            | test      | Tour Details          |
      | test       |           | Tour Details          |
      |            |           | Tour Details          |
      | test       | test      |                       |
      | 1234       | 1234      | 1234                  |
      | !@#$       | !@#$      | !@#$                  |
      | !@#$1234567QWERTYUIOPASDFGHJKLzxcvbnm!@#$1234567QWERTYUIOPASDFGHJKLzxcvbnm | !@#$1234567QWERTYUIOPASDFGHJKLzxcvbnm!@#$1234567QWERTYUIOPASDFGHJKLzxcvbnm | !@#$1234567QWERTYUIOPASDFGHJKLzxcvbnm!@#$1234567QWERTYUIOPASDFGHJKLzxcvbnm |
