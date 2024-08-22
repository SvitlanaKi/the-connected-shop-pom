class MainPage{
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
classCheckUrl(){
    cy.url()
        .should('eq','https://theconnectedshop.com/')
}
}

export default MainPage;