import { NavigateToAddUnits } from "../../../../support/utils/common";

/* eslint-disable import/prefer-default-export */
export const SetUnitUnit = () => {
  NavigateToAddUnits("DARK AGES", "Saxons");
  cy.get("button").contains("ADD UNIT").click();
  cy.get("div").contains("Earl").siblings("p").should("contain", "270 Points");
  cy.get("span").contains("Duty").trigger("mouseover");
  cy.get("div").should(
    "contain",
    "Whent his Fighter fails a Cool check roll the check again. If passed on the second attmept, this Fighter falls back as normal but will automatically regroup at the end of the round"
  );
  cy.get("div")
    .contains("Earl")
    .parent("div")
    .siblings("div")
    .children("p")
    .should("have.length", 10);

  cy.get("div").contains("Earl").click();
  cy.get("h5").contains("Earl").should("be.visible");
  cy.get("div").contains("POINTS").should("contain", "270");
  cy.get("h6").contains("Points Remaining").should("contain", "730");
};
