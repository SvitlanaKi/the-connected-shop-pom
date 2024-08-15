

import SearchElement from "../support/page_object/searchElement";
import MainPage from "../support/page_object/mainPage";

describe('Search Element',()=> {
    const searchElement = new SearchElement()
    const mainPage = new MainPage()
    beforeEach(() => {
        mainPage.visit();
        searchElement.classclosePopap();
        Cypress.on(`uncaught:exception`,(err,runnable) =>{
            return false;
        });
    })
    it(`Пошук діючого товару на сайті`, () =>{
        searchElement.classSearchLink()
        searchElement.classSearchLinkClick()
        searchElement.classInputSearch()
        searchElement.classInputSearch()
        searchElement.classCheckResult()
    });
});