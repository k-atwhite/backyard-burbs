describe("my-birds", () => {
  beforeEach(() => {
     cy.fixture('birdListMockData.js').then((testMyBirds) => {
       cy.intercept('https://api.ebird.org/v2/data/obs/US-FL/recent', testMyBirds)
       cy.visit("http://localhost:3000/");
       cy.get(".FL state").click();
       cy.get("#whbnut").click()
      })
      cy.fixture("nuthatchImageMockData").then((nuthatch) => {
        cy.intercept("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=50906f9c24e50a02f0d6034a3c6df6d7&per_page=1&format=json&nojsoncallback=1&sort=relevance&text=Sitta%20carolinensis%20bird", nuthatch);
      });    
    });
      it("Should contain a bird card when I see it button is clicked", () => {
        cy.get('.bird-card')
      });
})
