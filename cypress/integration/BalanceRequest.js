describe("balancerequest",()=>{
    beforeEach(()=>{
        cy.login('9847659504', 'Test@thaili1')
    })
    it('BR',()=>{
        cy.get(':nth-child(4) > .box-front > div > .icon').click()
        cy.get('#MobileNumber').type('9823299998')
        cy.get('#Amount').type('100')
        cy.get('#Remarks').type('test')
        cy.get('#confirmButton').click()
        cy.get('#btnConfirm').click()
        cy.wait(2000)
        cy.get('.success__content> .btn').click()
    
        cy.wait(2000)


    })
})