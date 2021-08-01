beforeEach(() => {
  cy.fixture("birdListMockData").then((listData) => {
    cy.intercept("https://api.ebird.org/v2/data/obs/US-CO/recent", listData);
  });
  cy.fixture("nuthatchImageMockData").then((nuthatch) => {
    cy.intercept(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=50906f9c24e50a02f0d6034a3c6df6d7&per_page=1&format=json&nojsoncallback=1&sort=relevance&text=Sitta%20carolinensis%20bird",
      nuthatch
    );
  });
  cy.fixture("spoonbillImageMockData").then((spoonbill) => {
    cy.intercept(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=50906f9c24e50a02f0d6034a3c6df6d7&per_page=1&format=json&nojsoncallback=1&sort=relevance&text=Platalea%20ajaja%20bird",
      spoonbill
    );
  });
  cy.fixture("treeSparrowImageMockData").then((sparrow) => {
    cy.intercept(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=50906f9c24e50a02f0d6034a3c6df6d7&per_page=1&format=json&nojsoncallback=1&sort=relevance&text=Passer%20montanus%20bird",
      sparrow
    );
  });
  cy.visit("http://localhost:3000/");
  cy.get("path[class='CO state']").click();
});

describe("Bird Details", () => {
  it("Should visit the url with the specific bird key", () => {
    cy.get();
  });

  it("Should contain three images of that bird", () => {
    cy.get("img").should("have.length", 3);
  });

  it("Should contain details about the bird", () => {
    cy.get(".bird-details").should("include.text", "Common Name:");
  });

  it("Should have an I SAW IT! button", () => {
    cy.get(".binoculars-container").should("include.text", "I see it!");
  });
});
