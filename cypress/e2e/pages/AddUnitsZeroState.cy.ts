import { NavigateToAddUnits } from "../../support/utils/common";

describe("Validate Add Unit Zero State Page", () => {
  it("Validate UI", () => {
    NavigateToAddUnits("FANTASY", "High Elves");
    cy.contains("Total Cost").should("contain", "0");
    cy.contains("button", "BACK").should("be.visible");
    cy.contains("Points Remaining").should("contain", "1,000");
    cy.contains("button", "EDIT WARBAND TOTAL").should("be.visible");
  });
  it("Change Warband total", () => {
    NavigateToAddUnits("DARK AGES", "Arabs");
    cy.contains("button", "EDIT WARBAND TOTAL").click();
    cy.contains("WARBAND TOTAL").should("be.visible");
    cy.get("input")
      .should("have.value", "1000")
      .clear()
      .type("2000")
      .should("have.value", "2000");
    cy.contains("button", "SAVE").click();
    cy.contains("Points Remaining").should("contain", "2,000");
    cy.contains("h6", "2,000").should("be.visible");
  });
});
