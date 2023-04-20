import { NavigateToFaction } from "../../support/utils/common";

describe("Validate Faction Page", () => {
  it("Validate Fantasy", () => {
    NavigateToFaction("FANTASY", "Brettonia");
    cy.contains("button", "BACK").should("be.visible");
    cy.get("div").contains("Brettonia").should("be.visible");
    cy.get("div").contains("Brettonia").click();
    cy.contains("h3", "Brettonia");
  });
  it("Validate Dark Ages", () => {
    NavigateToFaction("DARK AGES", "Romans");
    cy.contains("button", "BACK").should("be.visible");
    cy.get("div").contains("Romans").should("be.visible");
    cy.get("div").contains("Romans").click();
    cy.contains("h3", "Romans");
  });
});
