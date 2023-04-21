import { NavigateToStartScreen } from "../../support/utils/common";

describe("Validate RuleSet Page", () => {
  it("Validate Buttons", () => {
    NavigateToStartScreen();
    cy.get("button").should("have.length", 2);
    cy.contains("button", "IMPORT LIST").should("be.visible");
    cy.contains("button", "NEW LIST").should("be.visible");
  });
});
