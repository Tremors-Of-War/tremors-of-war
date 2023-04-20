describe("initial test", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("div.startscreen").should("be.visible");

    cy.get("button").should("have.length", 2); // Verify presence of two buttons
    cy.contains("button", "IMPORT LIST").should("be.visible");
    cy.contains("button", "NEW LIST").should("be.visible");
    cy.contains("button", "NEW LIST").click();

    cy.contains("h3", "RULE SET");
  });
});
