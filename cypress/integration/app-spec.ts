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
});

export {};
