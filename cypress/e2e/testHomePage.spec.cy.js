import MainPage from "../support/page_object/mainPage";
import OpenSite from "../support/page_object/openSite";

describe('Main Page Test',()=> {
    const mainPage = new MainPage()
    const openSite = new OpenSite()
    beforeEach(() => {
        openSite.visit();
        Cypress.on(`uncaught:exception`,(err,runnable) =>{
            return false;
        });
    })
    it('Site is Open and Check url',()=>{
       mainPage.classCheckUrl();
    });
    it('should have the correct header elements', () => {
        mainPage.classSectionHeader();
    });
    it (`Header Icon`, () =>{
        mainPage.classHeaderIcon()
    });
it(`Header Logo`, () =>{
    mainPage.classHeaderLogo()
});
});