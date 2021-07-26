beforeEach(() => {
  cy.visit("http://localhost:3000/");
});

describe("Regional Bird List", () => {
  it("Should display list of birds in chosen state", () => {
    cy.get("form")
      .get("option[value=AK]")
      .get("button")
      .click()
      .intercept(
        "GET",
        "https://api.ebird.org/v2/data/obs/US-${currentState}/recent`"
      )
      .get("bird-card");
    // SUGGESTIONS FOR ADDITIONAL TESTS? NOT SURE HOW MANY, NO SURE WHICH CARDS WILL SHOW UP...
  });

  it("Should contain cards with the common name and latin name", () => {
    cy.get("bird-card").contains("sci-name");
    get("bird-card").contains("common-name");
  });

  it("Each card should clickable to then display that birds details", () => {});
});
