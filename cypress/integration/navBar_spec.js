// DO I NEED TO WALK THROUGH ALL THE STEPS TO GET TO THIS NAV BAR IN THE BEFORE EACH?
// WHERE DO I ADD THE INTERCEPT?

beforeEach(() => {
  cy.visit("http://localhost:3000/");
});

describe("Navigation Bar", () => {
  it("Should contain link to State Picker", () => {
    cy.get("nav")
      .contains("Choose State")
      .click()
      .url("http://localhost:3000/");
  });

  it("Should contain link to list My Birds", () => {
    cy.get("nav")
      .contains("My Birds")
      .click()
      .url("http://localhost:3000/myBirds");
  });

  it("Should have a title", () => {
    cy.get("header")
      .contains("Backyard Burbs")
  });
  
  it("Should have a bird image", () => {
    cy.get("header")
    .get(".burb-logo").should('exist').should('be.visible')
  })
});
