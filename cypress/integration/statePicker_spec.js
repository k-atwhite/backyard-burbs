beforeEach(() => {
  cy.visit("http://localhost:3000/");
});

describe("State Picker", () => {
  it("Should visit the home page", () => {
    cy.contains("Backyard Burbs");
  });

  it("Should show a drop down form", () => {
    cy.get(".form").should("be.visible");
  });

  it("Should show all 50 states", () => {
    // Change to options are length of 50 - something like that
    cy.get("option[value=AK]").get("option[value=WY]");
  });

  it("Should have a submit button", () => {
    cy.get("button").contains("Submit");
  });

  it("Should direct user to list of all birds after clicking submit", () => {
    cy.get("button").click();
    // I THINK I NEED TO CHOOSE A STATE
    // AND THEN MAKE SURE THE URL MATCHES
  });
});
