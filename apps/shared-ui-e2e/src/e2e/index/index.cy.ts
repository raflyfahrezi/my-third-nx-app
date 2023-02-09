describe('shared-ui: Wrapper component', () => {
  beforeEach(() => cy.visit('/iframe.html?path=/story/button--primary'));

  it('should render the component', () => {
    cy.get('button').should('contain', 'Hello World');
  });
});
