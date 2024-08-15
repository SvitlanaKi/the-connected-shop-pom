

import SearchElement from "../support/page_object/searchElement";

describe('Search Element',()=> {
    const searchElement = new SearchElement()
    beforeEach(() => {

        Cypress.on(`uncaught:exception`,(err,runnable) =>{
            return false;
        });
    })
    it(`Search Link`, () =>{
        searchElement.classSearchLink()
    });
    it(`Search Link Click`, () =>{
        searchElement.classSearchLinkClick()
    });
    it ( `Input Search`, () =>{
        searchElement.classInputSearch()
    });
    it(`Check Result`, () =>{
    searchElement.classCheckResult()
});
});