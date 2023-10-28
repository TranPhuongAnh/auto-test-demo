import "cypress-real-events/support";

context('Login', () => {
    beforeEach('', () => {
        cy.visit('https://academy.30shine.com')
    })
    it('Action login', () => {
        cy.get('input[id="userName"]')
            .type('text')
            .should('have.value', 'text')

        cy.get('input[id="password"]')
            .type('passwordssss')
            .should('have.value', 'passwordssss')

        cy.get('.button').realHover()

        cy.get('.button')
            .should('have.text', 'ĐĂNG ' )

    })
})