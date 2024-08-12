class Menu{
    visit(){
        cy.visit('https://theconnectedshop.com');
        cy.viewport(1920,1080);
    }
    classHomePage(){
        cy.get(`.is-active > .Heading`)
            .should(`be.visible`)
    }
}


export default Menu;