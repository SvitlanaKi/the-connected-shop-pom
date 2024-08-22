import SearchElement from "../support/page_object/searchElement";
import Popup from "../support/page_object/popup";
import OpenSite from "../support/page_object/openSite";

describe('Search Element',()=> {
    const searchElement = new SearchElement()
    const popup = new Popup()
    const openSite = new OpenSite()
    beforeEach(() => {
        openSite.visit();
        popup.classClosePopup();
        Cypress.on(`uncaught:exception`,(err,runnable) =>{
            return false;
        });
    })
    it(`Пошук діючого товару на сайті`, () =>{
        searchElement.classSearchLink()
        searchElement.classSearchLinkClick()
        searchElement.classInputSearch()
        searchElement.classCheckResult()
    });
    it (`Пошук не діючого товару на сайті`, () =>{
        searchElement.classSearchLink()
        searchElement.classSearchLinkClick()
        searchElement.classInputBad()
        searchElement.classBadResult()
    });
});