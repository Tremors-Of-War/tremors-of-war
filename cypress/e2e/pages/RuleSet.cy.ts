import { NavigateToRuleSet } from "../../support/utils/common";

describe("Validate RuleSet Page", () => {
  it("Validate Buttons", () => {
    NavigateToRuleSet();
    cy.contains("button", "BACK").should("be.visible");

    cy.contains("button", "FANTASY").should("be.visible");
    cy.contains("button", "DARK AGES").should("be.visible");
  });
  it("Validate Paths", () => {
    NavigateToRuleSet();
    cy.contains("h3", "RULE SET");
    cy.contains("button", "FANTASY").click();
    cy.contains("h3", "FACTION");
    cy.get("div").contains("Brettonia").should("be.visible");
    cy.contains("button", "BACK").click();
    cy.contains("h3", "RULE SET");
    cy.contains("button", "DARK AGES").click();
    cy.contains("h3", "FACTION");
    cy.get("div").contains("Romans").should("be.visible");
    cy.contains("button", "BACK").click();
    cy.contains("h3", "RULE SET");
  });
});
