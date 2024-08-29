describe (`Check Main Menu`, () => {
    context(`Desktop Resolution`, () => {
        beforeEach(() => {
            cy.viewport(1280, 720)
            cy.visit(`https://theconnectedshop.com/`);
            Cypress.on(`uncaught:exception`,(err,runnable) =>{
                return false;
            });
        });
        it(`Відображення повного меню`, () => {
            cy.get('nav.Header__MainNav')
                .should(`be.visible`)
                .and(`exist`)
            cy.get('button.Header__Icon')
                .should(`not.be.visible`)
        });
    });
    context(`Mobile Resolution`, () => {
        beforeEach(() => {
            cy.viewport(`iphone-x`)
            cy.visit(`https://theconnectedshop.com/`);
            Cypress.on(`uncaught:exception`,(err,runnable) =>{
                return false;
            });
        });
        it(`Відображення бургер меню мобільна версія`, () => {
            cy.get('button.Header__Icon')
                .should(`be.visible`)
                .and(`exist`)
            cy.get('nav.Header__MainNav')
                .should(`not.be.visible`)
        });
    });
})