beforeEach(() => {
  cy.fixture("birdListMockData").then((listData) => {
    cy.intercept("https://api.ebird.org/v2/data/obs/US-CO/recent", listData);
  });

  cy.fixture("nuthatchImageMockData").then((nuthatch) => {
    cy.intercept("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=50906f9c24e50a02f0d6034a3c6df6d7&per_page=1&format=json&nojsoncallback=1&sort=relevance&text=Sitta%20carolinensis%20bird", nuthatch);
  });


  cy.visit("http://localhost:3000/");
});

describe("State Picker", () => {
  it("A map of the US should be visible on the home page", () => {
    cy.get(".us-state-map").should("be.visible");
  });

  it("The Choose State nav link should be active", () => {
    cy.contains(".nav-link", "Choose State").should("have.class", "selected-link");
  });

  it("The List of Birds nav link should not be visible", () => {
    cy.get(".nav-link").contains("List of Birds").should("not.be.visible");
  });

  // it("Should direct user to list of all birds after clicking submit", () => {
  //   cy.get("button").click();
  //   // I THINK I NEED TO CHOOSE A STATE
  //   // AND THEN MAKE SURE THE URL MATCHES
  // });
});
