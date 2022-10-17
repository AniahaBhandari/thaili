describe("topup", () => {


    beforeEach(() => {

        cy.login('9847659504', 'Test@thaili1')
        cy.wait(2000)
    })


    it("topup", () => {

        cy.contains("Topup").click()
        cy.get('#MobileNo').type("9849258880")
        cy.wait(5000)
        cy.get('#Amount').type('20')
        cy.wait(5000)
        // cy.get('#Amount').click().type('20{enter}', { force: true })
        cy.get('#confirmButton').click()
        cy.get('#btnConfirm').click()
        cy.wait(10000)
        cy.get("#pin1").type("1")
        cy.get("#pin2").type("2")
        cy.get("#pin3").type("3")
        cy.get("#pin4").type("4")
        cy.wait(20000)
        cy.get('#btnConfirmmodal').click()
        cy.wait(2000)
        cy.get('.success__content > .btn').click()
        cy.get('img[class="user__img"]').click()
        cy.wait(2000)
        cy.get(':nth-child(5) > .dropdown__a').click()
        // cy.get('#modal-close-button-ok').click()
        // cy.screenshot("NT Prepaid recharge success")
    })

})