beforeEach(() => {
    cy.visit("http://localhost:3000/")
});

describe("Theme toggle", () => {
    it("Should be a clickable input", () => {
        cy.get('input').should('exist')
    });

    it("Should change the background color when toggled", () => {
        cy.get('.switch').click().get('.bluejay')
        cy.get('.switch').click().get('.goldfinch')
    })
})