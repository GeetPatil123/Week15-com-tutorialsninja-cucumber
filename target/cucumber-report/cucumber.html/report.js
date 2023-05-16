$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DesktopPage.feature");
formatter.feature({
  "line": 1,
  "name": "Desktop page test",
  "description": "\r\nAs a user I want to check desktop page and add product into cart",
  "id": "desktop-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4235951600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "User should arrange product in alphabetical order successfully",
  "description": "",
  "id": "desktop-page-test;user-should-arrange-product-in-alphabetical-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I mouse hover and click on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on show all desktops",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on sort by position",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select product sort by \"Name (Z - A)\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see product arrange in alphabetical order successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnDesktopTab()"
});
formatter.result({
  "duration": 859921401,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShowAllDesktops()"
});
formatter.result({
  "duration": 369953200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnSortByPosition()"
});
formatter.result({
  "duration": 89117300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z - A)",
      "offset": 26
    }
  ],
  "location": "DesktopPageSteps.iSelectProductSortBy(String)"
});
formatter.result({
  "duration": 474719900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeProductArrangeInAlphabeticalOrderSuccessfully()"
});
formatter.result({
  "duration": 315411000,
  "status": "passed"
});
formatter.after({
  "duration": 617997200,
  "status": "passed"
});
formatter.uri("LaptopAndNotebookPage.feature");
formatter.feature({
  "line": 1,
  "name": "Laptop And Notebook Page Test",
  "description": "\r\nAs a user I want to check functionality of laptop and notebook page",
  "id": "laptop-and-notebook-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3048008601,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "User should arrange product in price high to low order successfully",
  "description": "",
  "id": "laptop-and-notebook-page-test;user-should-arrange-product-in-price-high-to-low-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I mouse hover and click on laptop and notebook tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on show all laptop and notebook",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on sort by position",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select product sort by \"Price (High \u003e Low)\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see product arrange in price high to low order successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnLaptopAndNotebookTab()"
});
formatter.result({
  "duration": 564281000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iClickOnShowAllLaptopAndNotebook()"
});
formatter.result({
  "duration": 345932799,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnSortByPosition()"
});
formatter.result({
  "duration": 79720801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (High \u003e Low)",
      "offset": 26
    }
  ],
  "location": "DesktopPageSteps.iSelectProductSortBy(String)"
});
formatter.result({
  "duration": 399601099,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNotebookPageSteps.iShouldSeeProductArrangeInPriceHighToLowOrderSuccessfully()"
});
formatter.result({
  "duration": 192893701,
  "status": "passed"
});
formatter.after({
  "duration": 622541500,
  "status": "passed"
});
formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page Test",
  "description": "\r\nAs a user I want to check login/logout functionality",
  "id": "login-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3093707999,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-page-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select \"Login\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 68906300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 359922599,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 38268401,
  "status": "passed"
});
formatter.after({
  "duration": 643448001,
  "status": "passed"
});
formatter.uri("RegisterPage.feature");
formatter.feature({
  "line": 1,
  "name": "Register Page Test",
  "description": "\r\nAs a user i want to do registration into tutorial ninja website",
  "id": "register-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3006092900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "User should navigate to register page successfully",
  "description": "",
  "id": "register-page-test;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on my account link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select \"Register\" option from my account options",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 79487901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "LoginPageSteps.iSelectOptionFromMyAccountOptions(String)"
});
formatter.result({
  "duration": 551812800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 34968101,
  "status": "passed"
});
formatter.after({
  "duration": 629481800,
  "status": "passed"
});
formatter.uri("TopMenu.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu test of Homepage",
  "description": "\r\nAs a user I want to check top menu tab options on Homepage",
  "id": "top-menu-test-of-homepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3937636900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "User should navigate to desktop page successfully",
  "description": "",
  "id": "top-menu-test-of-homepage;user-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I mouse hover and click on desktop tab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select menu \"Show All Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should navigate to desktop page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuSteps.iMouseHoverAndClickOnDesktopTab()"
});
formatter.result({
  "duration": 795816400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All Desktops",
      "offset": 15
    }
  ],
  "location": "TopMenuSteps.iSelectMenu(String)"
});
formatter.result({
  "duration": 20055888800,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuSteps.iShouldNavigateToDesktopPageSuccessfully()"
});
formatter.result({
  "duration": 32422099,
  "status": "passed"
});
formatter.after({
  "duration": 626404700,
  "status": "passed"
});
});