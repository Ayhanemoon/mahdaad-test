describe('Vue Application E2E Test', () => {
    it('Visits the home page and navigates to components', () => {
      // Visit the Home Page
      cy.visit('http://localhost:8080/');
      cy.contains('Welcome to the Home Page');
  
      // Check for the My Component link and click it
      cy.contains('Go to My Component').click();
      cy.url().should('include', '/my-component');
      cy.contains('0'); // Ensure it shows the initial count value
      cy.get('button').click();
      cy.contains('1'); // Check if count incremented
  
      // Navigate back to the home page and go to the Retry Request Component
      cy.visit('http://localhost:8080/');
      cy.contains('Go to Retry Request Component').click();
      cy.url().should('include', '/retry-request');
  
      // Verify the Retry Request Component is loaded
      cy.contains('Retry Request Component');
      cy.contains('Loading...'); // Check for initial loading state
  
      // Wait for the request to complete and verify the data is displayed
      cy.contains('"userId": 1').should('be.visible');
    });
});
  