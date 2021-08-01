beforeEach(() => {
  cy.fixture("birdListMockData").then((listData) => {
    cy.intercept("https://api.ebird.org/v2/data/obs/US-CO/recent", listData);
  });

  cy.fixture("nuthatchImageMockData").then((nuthatch) => {
    cy.intercept("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=50906f9c24e50a02f0d6034a3c6df6d7&per_page=1&format=json&nojsoncallback=1&sort=relevance&text=Sitta%20carolinensis%20bird", nuthatch);
  });

  cy.fixture("spoonbillImageMockData").then((spoonbill) => {
    cy.intercept("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=50906f9c24e50a02f0d6034a3c6df6d7&per_page=1&format=json&nojsoncallback=1&sort=relevance&text=Platalea%20ajaja%20bird", spoonbill);
  });

  cy.fixture("treeSparrowImageMockData").then((sparrow) => {
    cy.intercept("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=50906f9c24e50a02f0d6034a3c6df6d7&per_page=1&format=json&nojsoncallback=1&sort=relevance&text=Passer%20montanus%20bird", sparrow);
  });

  cy.visit("http://localhost:3000/");
  cy.get("path[class='CO state']").click();
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
