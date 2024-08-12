

import Menu from "../support/page_object/menu";
import MainPage from "../support/page_object/mainPage";

describe('Menu  Test',()=> {
    const menu = new Menu()
    const mainPage = new MainPage()
    beforeEach(() => {
       mainPage.visit();
        Cypress.on(`uncaught:exception`,(err,runnable) =>{
            return false;
        });
    })
    it(`Section Home`, () =>{
        menu.classHomePage()
    })
    });