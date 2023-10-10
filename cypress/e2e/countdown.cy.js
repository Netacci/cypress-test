describe('Test react app', () => {
  // beforeEach(() => {
  //   cy.visit('/');
  // });
  it('checks for vite name', () => {
    cy.getDataTest('Check vite').contains('Vite + React');
  });
  it('clicks button', () => {
    cy.getDataTest('count button').contains('count').click();
  });
});
