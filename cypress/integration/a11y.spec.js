// Unfortunatley cypress is not yet good at keyboard interactions other than typing into an input.
it('it has a skip nav', () => {
  cy.visit('/');
  cy.get('a').first().click();
  cy.get('main').then((el) => {
    const y = el[0].getBoundingClientRect().y;
    cy.expect(y).to.be.closeTo(0, 1);
  });
});
