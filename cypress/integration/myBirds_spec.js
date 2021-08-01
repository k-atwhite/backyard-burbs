describe("my-birds", () => {
  beforeEach(() => {
     cy.fixture('birdListMockData').then((testMyBirds) => {
       cy.intercept('https://api.ebird.org/v2/data/obs/US-CO/recent', testMyBirds)
      })
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
      cy.get("#whbnut").click();
      cy.get(".i-see-it").click();  
    });
      it("Should contain a bird card when I see it button is clicked", () => {
        cy.get('#whbnut')
      });
      it("Should a common name text and an image", () => {
        cy.get('#whbnut').should('have.css','background-image')
          .get('.card-text').contains('White-breasted Nuthatch')
      })
})
