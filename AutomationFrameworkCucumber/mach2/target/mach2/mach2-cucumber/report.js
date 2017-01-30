$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/widget/tableEmExBySkillLevels.feature");
formatter.feature({
  "line": 1,
  "name": "Validate table of Employees Experience by Skill Levels",
  "description": "",
  "id": "validate-table-of-employees-experience-by-skill-levels",
  "keyword": "Feature"
});
formatter.before({
  "duration": 117225600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify table of Employees Experience by specific Skill Levels - Advanced.",
  "description": "",
  "id": "validate-table-of-employees-experience-by-skill-levels;verify-table-of-employees-experience-by-specific-skill-levels---advanced.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am in Mach2 webpage mt",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I set username as \"Sandra\" mt",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I set password as \"SRrf1991\" and click Submit button mt",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I add a new Board to the Group mt",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Widget button at the top menu bar mt",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on \"Table\" icon inside the Widget options mt",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select \"Open ERP\" service icon. mt",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select \"Employees Experience\" of Open ERP mt",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Skills Levels combobox and select Advance. mt",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click the Save button mt",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the table of Employees by Skill Levels: \"Advanced\" on E.E. category mt",
  "keyword": "Then "
});
formatter.match({
  "location": "TableEmExBySkillLevels.iAmInMachWebpageS()"
});
formatter.result({
  "duration": 10944255300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sandra",
      "offset": 19
    }
  ],
  "location": "TableEmExBySkillLevels.iSetUsernameAsS(String)"
});
formatter.result({
  "duration": 182998900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SRrf1991",
      "offset": 19
    }
  ],
  "location": "TableEmExBySkillLevels.iSetPasswordAsAndClickSubmitButtonS(String)"
});
formatter.result({
  "duration": 208963700,
  "status": "passed"
});
formatter.match({
  "location": "TableEmExBySkillLevels.iAddANewBoardToTheGroupS()"
});
formatter.result({
  "duration": 1947880700,
  "status": "passed"
});
formatter.match({
  "location": "TableEmExBySkillLevels.iClickOnWidgetButtonAtTheTopMenuBarS()"
});
formatter.result({
  "duration": 1130158500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Table",
      "offset": 12
    }
  ],
  "location": "TableEmExBySkillLevels.iClickOnIconInsideTheWidgetOptionsS(String)"
});
formatter.result({
  "duration": 613085600,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d56.0.2924.76)\n  (Driver info: chromedriver\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 35 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027at02sela01\u0027, ip: \u002710.28.104.131\u0027, os.name: \u0027Windows Server 2012 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\ADMINI~1\\AppData\\Local\\Temp\\2\\scoped_dir15648_26997}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d56.0.2924.76, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 2949bc693b067866c30715f3cf9562a1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat org.funjala.automation.web.pages.mach2.widget.WidgetPage.addWidget(WidgetPage.java:135)\r\n\tat org.funjala.automation.web.mach2.steps.widget.TableEmExBySkillLevels.iClickOnIconInsideTheWidgetOptionsS(TableEmExBySkillLevels.java:61)\r\n\tat ✽.And I click on \"Table\" icon inside the Widget options mt(src/test/resources/features/widget/tableEmExBySkillLevels.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Open ERP",
      "offset": 10
    }
  ],
  "location": "TableEmExBySkillLevels.iSelectServiceIconS(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Employees Experience",
      "offset": 10
    }
  ],
  "location": "TableEmExBySkillLevels.iSelectOfOpenERPMt(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TableEmExBySkillLevels.iClickOnSkillsLevelsComboboxAndSelectAdvanceMt()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TableEmExBySkillLevels.iClickTheSaveButtonMt()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Advanced",
      "offset": 54
    }
  ],
  "location": "TableEmExBySkillLevels.iShouldSeeTheTableOfEmployeesBySkillLevelsOnEECategoryMt(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 202699700,
  "status": "passed"
});
});