// DO I NEED TO WALK THROUGH ALL THE STEPS TO GET TO THIS NAV BAR IN THE BEFORE EACH?
// WHERE DO I ADD THE INTERCEPT?

beforeEach(() => {
  cy.visit("http://localhost:3000/");
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
      .url("http://localhost:3000/myBirds");
  });
});
