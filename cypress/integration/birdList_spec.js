beforeEach(() => {
  cy.visit("http://localhost:3000/").intercept(
    "GET",
    "https://api.ebird.org/v2/data/obs/US-AK/recent`"
  );
  // INTERCEPT NEEDS TO GO HERE - it's just listening for the request
  // Pop in three birds from alaska
});

describe("Regional Bird List", () => {
  it("Should display list of birds in chosen state", () => {
    cy.get("form")
      .get("option[value=AK]")
      .get("button")
      .click()
      .get("bird-card");
    // SUGGESTIONS FOR ADDITIONAL TESTS? NOT SURE HOW MANY, NO SURE WHICH CARDS WILL SHOW UP...
  });

  it("Should contain cards with the common name and latin name", () => {
    // add in dummy data! Sydney will show us fixtures!
    cy.get("bird-card").contains("sci-name");
    get("bird-card").contains("common-name");
  });

  it("Each card should clickable to then display that birds details", () => {});
});
