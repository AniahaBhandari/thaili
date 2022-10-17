describe("topupstatement",()=>{
    beforeEach(()=>{
        cy.login("9847659504" ,"Test@thaili1")
        cy.wait(2000)
    })
it('statement',()=>{

cy.get('img[class="user__img"]').click()
cy.wait(2000)
cy.get(':nth-child(5) > .dropdown__a').click()
//cy.get('.dropdown__a>:nth-child(5)').click()

})
}
)