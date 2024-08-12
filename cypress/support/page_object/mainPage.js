class MainPage{
    visit(){
        cy.visit('https://theconnectedshop.com');
        cy.viewport(1920,1080);
    }
    classSectionHeader (){
    cy.get('#section-header')
        .should('exist')
        .and(`be.visible`)
}
classHeaderIcon () {
        cy.get(`.Header__Icon`)
            .should('exist')
}
classHeaderLogo(){
        cy.get(`.Header__LogoImage--transparent`)
            .should('exist')
            .and(`be.visible`)
}
}

export default MainPage;