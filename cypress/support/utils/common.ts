/* eslint-disable import/prefer-default-export */
export const NavigateToStartScreen = () => {
  cy.visit("/");
  cy.get("div.startscreen").should("be.visible");
};

export const NavigateToRuleSet = () => {
  NavigateToStartScreen();
  cy.contains("button", "NEW LIST").click();
  cy.contains("h3", "RULE SET");
};

export const NavigateToFaction = (ruleset: string, faction: string) => {
  NavigateToRuleSet();
  cy.contains("button", ruleset).click();
  cy.contains("h3", "FACTION");
  cy.contains(faction).should("be.visible");
};

export const NavigateToAddUnits = (ruleset: string, faction: string) => {
  NavigateToFaction(ruleset, faction);
  cy.contains(faction).click();
  cy.contains("You do not have any units.").should("be.visible");
};

export const NavigateToSetUnit = (
  ruleset: string,
  faction: string,
  unit: string
) => {
  NavigateToAddUnits(ruleset, faction);
  cy.get("button").contains("ADD UNIT").click();
  cy.get("div").contains(unit).click();
  cy.get("h5").contains(unit).should("be.visible");
};
