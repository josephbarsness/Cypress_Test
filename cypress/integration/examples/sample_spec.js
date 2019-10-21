describe('My First Test', function () {
it('Gets, types and asserts', function () {
    cy.visit('https://example.cypress.io')
        .pause()
        .contains('type').click()
        .url().should('include', '/commands/actions')
        .get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com');
})
});