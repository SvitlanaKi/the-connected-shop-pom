

import Menu from "../support/page_object/menu";

describe('Menu  Test',()=> {
    const menu = new Menu()
    beforeEach(() => {
        menu.visit();
        Cypress.on(`uncaught:exception`,(err,runnable) =>{
            return false;
        });
    })
    it(`Section Home`, () =>{
        menu.classHomePage()
    })
    });