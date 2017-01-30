package org.funjala.automation.web.mach2.steps.widget;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.funjala.automation.web.common.drivers.Driver;
import org.funjala.automation.web.pages.erp.home.OEHomePage;
import org.funjala.automation.web.pages.erp.login.OELoginPage;
import org.funjala.automation.web.pages.erp.search.OESearch;
import org.funjala.automation.web.pages.mach2.login.LoginPage;
import org.funjala.automation.web.pages.mach2.menu.TopMenuPage;
import org.funjala.automation.web.pages.mach2.widget.WidgetPage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.io.IOException;
import java.util.List;

import static org.testng.AssertJUnit.assertEquals;

/**
 * Created by Administrator on 1/28/2017.
 */
public class TableEmExBySkillLevels {
  WebDriver driver;
  LoginPage loginPage;
  TopMenuPage topMenuPage;
  WidgetPage widgetPage;

  @Given("^I am in Mach2 webpage mt$")
  public void iAmInMachWebpageS() throws Throwable {
    driver = Driver.getDriver().openBrowser(Driver.Mach2);
    loginPage = new LoginPage(driver);
  }

  @And("^I set username as \"([^\"]*)\" mt$")
  public void iSetUsernameAsS(String user) {
    loginPage.setUsernameTextField(user);
  }

  @And("^I set password as \"([^\"]*)\" and click Submit button mt$")
  public void iSetPasswordAsAndClickSubmitButtonS(String password) {
    loginPage.setPasswordTextField(password);
    topMenuPage = loginPage.clickNextButton();
  }

  @And("^I add a new Board to the Group mt$")
  public void iAddANewBoardToTheGroupS() {
    topMenuPage.addNewBoard();
  }

  @And("^I click on Widget button at the top menu bar mt$")
  public void iClickOnWidgetButtonAtTheTopMenuBarS() {
    widgetPage = topMenuPage.addNewWidget();
  }

  @And("^I click on \"([^\"]*)\" icon inside the Widget options mt$")
  public void iClickOnIconInsideTheWidgetOptionsS(String option) {
    widgetPage.addWidget(option);
  }

  @And("^I select \"([^\"]*)\" service icon. mt$")
  public void iSelectServiceIconS(String option){
    widgetPage.clickOnService(option);
  }

  @And("^I select \"([^\"]*)\" of Open ERP mt$")
  public void iSelectOfOpenERPMt(String option) {
    widgetPage.clickOnSpecificService(option);
  }

  @When("^I click on Skills Levels combobox and select Advance. mt$")
  public void iClickOnSkillsLevelsComboboxAndSelectAdvanceMt() {
    widgetPage.clickOnSkillLevels();
    widgetPage.setSkillLevel("Advanced");
  }

  @And("^I click the Save button mt$")
  public void iClickTheSaveButtonMt() {
    widgetPage.clickSaveButton();
  }

  @Then("^I should see the table of Employees by Skill Levels: \"([^\"]*)\" on E.E. category mt$")
  public void iShouldSeeTheTableOfEmployeesBySkillLevelsOnEECategoryMt(String level) throws InterruptedException, IOException {
    int numbersOfColumns=widgetPage.findSkillOnColumns(level);

    driver = Driver.getDriver().getWebDriver();
    WidgetPage widget = new WidgetPage(driver);
    TopMenuPage topMenuPage = new TopMenuPage(driver);
    topMenuPage.clickOnLogOut();

    driver=Driver.getDriver().openBrowser(Driver.OpenERP);
    OEHomePage homePage;
    OELoginPage oeLoginPage = new OELoginPage(driver);
    OESearch oeSearch;
    oeLoginPage.setUserName("jose7");
    oeLoginPage.setPassword("jose7");
    homePage = oeLoginPage.clickBtnSubmit();
    homePage.clickHumanResources();
    oeSearch = homePage.oeSearch();
    oeSearch.clickSearchArrow();
    oeSearch.clickAdvancedSearch();
    oeSearch.foundAndClickAdvancedFilterOptions("Skills", "contains", level);
    oeSearch.clickApplySearch();
    oeSearch.clickSwitchList();
    oeSearch.clickNumberElement();
    oeSearch.clickQuantityButton();
    oeSearch.clickUnlimitedOption();
    List<WebElement> result = oeSearch.listOfAllElements();
    int expectResult = result.size();

    assertEquals(expectResult,numbersOfColumns);
  }
}
