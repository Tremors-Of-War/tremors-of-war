import { NavigateToAddUnits } from "../../../../support/utils/common";

/* eslint-disable import/prefer-default-export */
export const SetUnitBlankState = () => {
  NavigateToAddUnits("FANTASY", "Dark Elves");
  cy.get("button").contains("ADD UNIT").click();
  cy.get("label")
    .contains("NAME")
    .siblings("div")
    .children("input")
    .should("have.value", "");

  cy.get("button").contains("UNIT").should("be.visible");
  cy.get("button").contains("ARMOUR").should("not.exist");
  cy.get("button").contains("WEAPONRY").should("not.exist");
  cy.get("button").contains("MOUNTS").should("not.exist");
  cy.get("button").contains("UPGRADES").should("not.exist");

  cy.get("h5").contains("SELECT UNIT").should("be.visible");
  cy.get("div").contains("Points").should("contain", "0");

  cy.get("button").contains("SAVE").should("be.disabled");
  cy.get("button").contains("CANCEL").should("be.visible");
};
