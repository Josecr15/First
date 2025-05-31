describe('Mi primer test funcional', () => {
  it('Visita el sitio de Cypress y verifica contenido', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();

    // Interactúa con el campo de texto
    cy.url().should('include', '/commands/actions');
    cy.get('.action-email')
      .type('correo@ejemplo.com')
      .should('have.value', 'correo@ejemplo.com');
  });
});