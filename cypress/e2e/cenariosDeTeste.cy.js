describe('Testes de Login e Recuperação de Senha - Automation Practice', () => {

    beforeEach(() => {
        cy.visit('https://automationpractice.com/index.php?controller=authentication&back=my-account');
    });

    it('Cenário 1: Verificar login sem a senha', () => {
        cy.get('#account_input').type('emailjaexistente@exemplo.com');
        cy.get('#SubmitLogin').click();
        cy.get('.alert-danger').should('contain', 'Password is required');
        cy.get('#email').should('have.value', 'emailjaexistente@exemplo.com');
    });

    it('Cenário 2: Verificar registro de conta já previamente registrada', () => {
        cy.get('#email_create').type('emailjaexistente@exemplo.com');
        cy.get('#SubmitCreate').click();
        cy.get('.alert-danger').should('contain', 'An account using this email address has already been registered');
    });

    it('Cenário 3: Verificar recuperação de senha com um email inválido', () => {
        cy.get('.lost_password > a').click();
        cy.url().should('include', 'controller=password');
        cy.get('#email').type('emailnaoregistrado@exemplo.com');
        cy.get('.submit > button').click();
        cy.get('.alert-danger').should('contain', 'There is no account registered for this email address');
    });

});
