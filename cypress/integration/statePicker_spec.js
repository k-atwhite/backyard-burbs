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
});
