beforeEach(() => {
  cy.visit();
});

describe("Navigation Bar", () => {
  it("Should contain link to State Picker", () => {
    cy.get("NavLink")
      .contains("Choose State")
      .click()
      .url("http://localhost:3000/");
  });

  it("Should contain link to list of regional birds", () => {
    cy.get("NavLink")
      .contains("List of Birds")
      .click()
      .url("http://localhost:3000/birds");
  });

  it("Should contain link to list My Birds", () => {
    cy.get("NavLink")
      .contains("My Birds")
      .click()
      .url("http://localhost:3000/seen");
  });
});
