class Menu {

    classHomePage() {
        cy.get(`.is-active > .Heading`)
            .should(`be.visible`)

    }
}

export default Menu;