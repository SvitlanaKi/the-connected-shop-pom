import Menu from "./menu";

class SearchElement {
     searchInit = `.Header__SecondaryNav > .HorizontalList > :nth-child(2) > .Heading`;
 classSearchLink(){
    cy.get(this.searchInit)
        .should(`be.visible`)
        .and(`have.attr`,`href`, `/search`)
}
classSearchLinkClick(){
    cy.get(this.searchInit)
        .click();
}
classInputSearch(){
     cy.get(`input[type="search"][placeholder="Search..."]`)
         .should(`be.visible`)
         .type('smart lock')
}
classCheckResult(){
     cy.get(`span.Heading.Text--subdued.u-h7`)
         .should('contain.text', 'results')
         .then(($span) => {
             const resultsText = $span.text();
             cy.log(`Search results text: ${resultsText}`)
         })
}
    }
export default SearchElement;

