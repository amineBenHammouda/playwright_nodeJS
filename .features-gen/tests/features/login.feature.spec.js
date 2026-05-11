// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login functionality', () => {

  test('User can login with valid credentials', async ({ Given, When, Then, And }) => { 
    await Given('I navigate to "https://practicetestautomation.com/practice-test-login/"'); 
    await And('I enter username "student"'); 
    await And('I enter password "Password123"'); 
    await When('I click the login button'); 
    await Then('I should se the page containing "Logged In Successfully"'); 
  });

  test.describe('Fail login with invalid credentials', () => {

    test('Example #1', async ({ Given, When, Then, And }) => { 
      await Given('I navigate to "https://practicetestautomation.com/practice-test-login/"'); 
      await And('I enter username "student"'); 
      await And('I enter password "wrongPassword"'); 
      await When('I click the login button'); 
      await Then('I should se the error message "Your password is invalid!"'); 
    });

    test('Example #2', async ({ Given, When, Then, And }) => { 
      await Given('I navigate to "https://practicetestautomation.com/practice-test-login/"'); 
      await And('I enter username "wrongUser"'); 
      await And('I enter password "Password123"'); 
      await When('I click the login button'); 
      await Then('I should se the error message "Your username is invalid!"'); 
    });

    test('Example #3', async ({ Given, When, Then, And }) => { 
      await Given('I navigate to "https://practicetestautomation.com/practice-test-login/"'); 
      await And('I enter username "wrongUser"'); 
      await And('I enter password "wrongPassword"'); 
      await When('I click the login button'); 
      await Then('I should se the error message "Your username is invalid!"'); 
    });

  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://practicetestautomation.com/practice-test-login/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://practicetestautomation.com/practice-test-login/\"","children":[{"start":15,"value":"https://practicetestautomation.com/practice-test-login/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I enter username \"student\"","stepMatchArguments":[{"group":{"start":17,"value":"\"student\"","children":[{"start":18,"value":"student","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I enter password \"Password123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Password123\"","children":[{"start":18,"value":"Password123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I click the login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should se the page containing \"Logged In Successfully\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Logged In Successfully\"","children":[{"start":33,"value":"Logged In Successfully","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://practicetestautomation.com/practice-test-login/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://practicetestautomation.com/practice-test-login/\"","children":[{"start":15,"value":"https://practicetestautomation.com/practice-test-login/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And I enter username \"student\"","stepMatchArguments":[{"group":{"start":17,"value":"\"student\"","children":[{"start":18,"value":"student","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And I enter password \"wrongPassword\"","stepMatchArguments":[{"group":{"start":17,"value":"\"wrongPassword\"","children":[{"start":18,"value":"wrongPassword","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I click the login button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should se the error message \"Your password is invalid!\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Your password is invalid!\"","children":[{"start":31,"value":"Your password is invalid!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://practicetestautomation.com/practice-test-login/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://practicetestautomation.com/practice-test-login/\"","children":[{"start":15,"value":"https://practicetestautomation.com/practice-test-login/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And I enter username \"wrongUser\"","stepMatchArguments":[{"group":{"start":17,"value":"\"wrongUser\"","children":[{"start":18,"value":"wrongUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And I enter password \"Password123\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Password123\"","children":[{"start":18,"value":"Password123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I click the login button","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should se the error message \"Your username is invalid!\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Your username is invalid!\"","children":[{"start":31,"value":"Your username is invalid!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":33,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://practicetestautomation.com/practice-test-login/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://practicetestautomation.com/practice-test-login/\"","children":[{"start":15,"value":"https://practicetestautomation.com/practice-test-login/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And I enter username \"wrongUser\"","stepMatchArguments":[{"group":{"start":17,"value":"\"wrongUser\"","children":[{"start":18,"value":"wrongUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And I enter password \"wrongPassword\"","stepMatchArguments":[{"group":{"start":17,"value":"\"wrongPassword\"","children":[{"start":18,"value":"wrongPassword","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When I click the login button","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should se the error message \"Your username is invalid!\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Your username is invalid!\"","children":[{"start":31,"value":"Your username is invalid!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end