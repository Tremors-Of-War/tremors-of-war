import { NavigateToSetUnit } from "../../../../support/utils/common";

/* eslint-disable import/prefer-default-export */
export const SetUnitArmourBlankState = () => {
  NavigateToSetUnit("DARK AGES", "Vikings", "Hersir");
  cy.get("div").contains("POINTS").should("contain", "220");

  cy.get("button").contains("ARMOUR").click();

  cy.get("h6").contains("ARMOUR").should("be.visible");
  cy.get("h6").contains("SHIELD").should("be.visible");
  cy.get("h6").contains("HELMET").should("be.visible");

  cy.get("label")
    .contains("ARMOUR")
    .siblings("div")
    .children("div")
    .siblings("input")
    .should("have.value", "");
  cy.get("label")
    .contains("SHIELD")
    .siblings("div")
    .children("div")
    .siblings("input")
    .should("have.value", "");
  cy.get("label")
    .contains("HELMET")
    .siblings("div")
    .children("div")
    .siblings("input")
    .should("have.value", "");

  cy.get("button").contains("SAVE").should("not.be.disabled");
  cy.get("button").contains("CANCEL").should("be.visible");
  cy.get("button").contains("DELETE UNIT").should("not.exist");

  cy.get("p").contains("ARMOUR SAVE");
  cy.get("p")
    .contains("R")

    .siblings("div")
    .should("contain", "11")
    .and("contains", "+");
  cy.get("p")
    .contains("CC")

    .siblings("div")
    .should("contain", "11")
    .and("contains", "+");

  cy.get("p")
    .contains("ARMOUR COST")
    .siblings("p")
    .should("contain", "0")
    .and("POINTS");
};
