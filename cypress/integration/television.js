describe('services', ()=>{
    beforeEach(()=>{
        cy.login('9847659504', 'Test@thaili1')
    })
    it('television',()=>{
        cy.contains("Television").click()
        cy.wait(2000)
        cy.get('img[class="icon"]').click()
        cy.wait(2000)
        cy.get('#DishhomeId').type(6658042)
        cy.get('#btnConfirm').click()

        cy.get('#select2-Amount-container').click()
        cy.get('select').select('500', {force:true})  //Select the option with the value "500"
        cy.get('#btnConfirm').click()
        cy.get('#btnConfirm').click()
        cy.wait(2000)
        cy.get("#pin1").type("1")
        cy.get("#pin2").type("2")
        cy.get("#pin3").type("3")
        cy.get("#pin4").type("4")
        cy.wait(2000)
        cy.get('#btnConfirmmodal').click()
        cy.wait(2000)
        cy.get('.success__content > .btn').click()

    })
})