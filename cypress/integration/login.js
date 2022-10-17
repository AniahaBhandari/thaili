/reference type ="cypress"/
describe('Login', ()=> {
    beforeEach(()=>{
        cy.visit("http://uatthaili.digihub.com.np")


})
it("test valid mbl/pass", () => {



    cy.get("#user_name").type("9847659504")

    cy.get("#user_password").type("Test@thaili1")

    cy.get('#loginform > .btn').click()



    cy.url().should('be.eq', 'http://thaili.digihub.com.np/Home/DashBoard')

})

})