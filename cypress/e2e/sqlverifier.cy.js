describe('SqlVerifier', () => {
  it('should load the homepage', () => {
    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com')
    cy.get('h1').should('exist')
  })
});
