// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("When the user click on recommended recipe", () => {
    it("should navigate to detail page", () => {
      cy.get("li").first().click();
    });
  });

  describe("When the user click on a Top selection recipe", () => {
    it("should navigate to detail page", () => {
      cy.get("ul").eq(1).find("li").eq(2).contains("See more").click();
      cy.contains("Food recipes").click();
    });
  });
});

export {};
