# Sample API test for manager login scenario
Feature: Manager Login API Flow

  @skip
  Scenario Outline: Validate login for a manager
    Given /login endpoint is prepared
    When a manager logs in with its "<username>" and "<password>"
    Then the response status should be <status>
    And a token should <tokenExpected> be returned

    Examples:
      | username             | password       | status | tokenExpected |
      | johndoe@test.com     | password123    | 200    | true          |
      | invalid@test.com     | wrongpass      | 401    | false         |
