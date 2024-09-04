class MenuMedia{
    visit() {
        cy.viewport(1280, 720)
        cy.visit(`https://theconnectedshop.com/`);
    };
    classShowAllMenu (){
        cy.get('nav.Header__MainNav')
            .should(`be.visible`)
            .and(`exist`)
        cy.get('button.Header__Icon')
            .should(`not.be.visible`)
    };
    classOpenSiteMobile (){
        cy.viewport(`iphone-x`)
        cy.visit(`https://theconnectedshop.com/`);
    };
    classShowBurgerMenu () {
        cy.get('button.Header__Icon')
            .should(`be.visible`)
            .and(`exist`)
        cy.get('nav.Header__MainNav')
            .should(`not.be.visible`)
    };
    classCheckMenuDesktop (){
        cy.get('nav.Header__MainNav')
            .contains('HOME')
            .contains('NEW IN')
            .contains('Collections')
            .contains('Personal')
            .contains('Businesses')
            .contains('Tech Talk')
            .contains('About us')
            .contains('Contact')
            .contains('Section Call')
    };
    classCheckMenuMobile(){
        cy.get('button.Header__Icon')
            .should(`be.visible`)
            .and(`exist`)
            .click()
            .contains('HOME')
            .contains('NEW IN')
            .contains('Collections')
            .contains('Personal')
            .contains('Businesses')
            .contains('Tech Talk')
            .contains('About us')
            .contains('Contact')
            .contains('Section Call')
    }
    classCollectionMobile(){
        cy.get('button.Header__Icon')
            .click()
        cy.get('div.DropdownMenu')
            .should('be.visible')
            .within(() => {
                cy.contains('Smart Door Locks')
                    .should('be.visible');
                cy.contains('Smart Locks')
                    .should('be.visible');
                cy.contains('Smart Sensors')
                    .should('be.visible');
                cy.contains('Camera Monitors')
                    .should('be.visible');
                cy.contains('Smart Robots')
                    .should('be.visible');
                cy.contains('Smart Wallets')
                    .should('be.visible');
                cy.contains('Car Dash Cams')
                    .should('be.visible');
            });
    }
}
export default MenuMedia;