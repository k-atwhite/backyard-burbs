describe("Navigation Bar", () => {
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
  });


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

    it("Should show List of Birds nav link when state is chosen", () => {
      cy.get("path[class='CO state']").click();
      cy.get("nav").contains("List of Birds")
    })
});

