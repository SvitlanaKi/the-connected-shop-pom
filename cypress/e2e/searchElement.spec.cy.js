

import SearchElement from "../support/page_object/searchElement";
import MainPage from "../support/page_object/mainPage";
import Popup from "../support/page_object/popup";

describe('Search Element',()=> {
    const searchElement = new SearchElement()
    const mainPage = new MainPage()
    const popup = new Popup()
    beforeEach(() => {
        mainPage.visit();
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