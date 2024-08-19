class Popup{
    classClosePopup(){
        cy.get(`.NewsletterPopup__Close`)
            .should(`be.visible`)
            .click();
    }
}
export default Popup;