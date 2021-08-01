beforeEach(() => {
  cy.visit("http://localhost:3000/");
});

describe("State Picker", () => {
  it("A map of the US should be visible on the home page", () => {
    cy.get(".us-state-map").should("be.visible");
  });

  it("The Choose State nav link should be active", () => {
    cy.contains(".nav-link", "Choose State").should("have.class", "selected-link");
  });

  // it("Should direct user to list of all birds after clicking submit", () => {
  //   cy.get("button").click();
  //   // I THINK I NEED TO CHOOSE A STATE
  //   // AND THEN MAKE SURE THE URL MATCHES
  // });
});
