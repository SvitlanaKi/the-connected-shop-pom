
class SearchElement {
     searchInit = `.Header__SecondaryNav > .HorizontalList > :nth-child(2) > .Heading`;
searchLink(){
    cy.get(this.searchInit)
        .should(`be.visible`)
        .and(`have.attr`,`href`, `/search`)
}
searchLinkClick(){
    cy.get(this.searchInit)
        .click();
}
    }


export default SearchElement;