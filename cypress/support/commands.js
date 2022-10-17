Cypress.Commands.add('login', (user_name, user_password) => {
    cy.visit("http://uatthaili.digihub.com.np")

cy.get("#user_name").type(user_name)
cy.get("#user_password").type(user_password)
cy.get('#loginform > .btn').click()
})