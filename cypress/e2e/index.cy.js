describe('Index', () => {
  it('Capture a index page', () => {
    cy.visit('http://localhost:3000')

    cy.percySnapshot();

    const expandButton = cy.findByRole('group');

    expandButton.click();

    cy.percySnapshot(`${Cypress.currentTest.titlePath.join(' ')} expandButton`);
  })
  it('Capture a index page (expanded)', () => {
    cy.visit('http://localhost:3000')

    const expandButton = cy.findByRole('group');

    expandButton.click();

    expandButton.percySnapshot();
  })
})
