import MainPage from "../support/page_object/mainPage";

describe('Main Page Test',()=> {
    const mainPage = new MainPage()
    beforeEach(() => {
        mainPage.visit();
        Cypress.on(`uncaught:exception`,(err,runnable) =>{
            return false;
        });
    })
    it('Site is Open and Check url',()=>{
        cy.url()
            .should('eq','https://theconnectedshop.com/')
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