import Menu from "../support/page_object/menu";
import OpenSite from "../support/page_object/openSite";

describe('Menu  Test',()=> {
    const menu = new Menu()
    const openSite = new OpenSite()
    beforeEach(() => {
        openSite.visit();
        Cypress.on(`uncaught:exception`,(err,runnable) =>{
            return false;
        });
    })
    it(`Section Home`, () =>{
        menu.classHomePage()
    })
    });