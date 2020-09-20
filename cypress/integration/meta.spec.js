it('has my name in the title', () => {
  cy.visit('/');
  cy.title().should('include', 'Steven Frieson');
});
