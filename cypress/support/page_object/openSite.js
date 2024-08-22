class OpenSite {
    visit(){
        cy.visit('https://theconnectedshop.com');
        cy.viewport(1920,1080);
    }
}
export default OpenSite;