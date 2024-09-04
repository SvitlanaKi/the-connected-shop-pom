import MenuMedia from "../support/page_object/menuMedia";

describe (`Check Main Menu`, () => {
    const menuMedia = new MenuMedia()
        beforeEach(() => {
            menuMedia.visit()
            Cypress.on(`uncaught:exception`,(err,runnable) =>{
                return false;
            });
        });
        it(`Відображення повного меню`, () => {
           menuMedia.classShowAllMenu()
            menuMedia.classCheckMenuDesktop()
        });

    context(`Mobile Resolution`, () => {
        beforeEach(() => {
            menuMedia.classOpenSiteMobile()
            Cypress.on(`uncaught:exception`,(err,runnable) =>{
                return false;
            });
        });
        it(`Відображення бургер меню мобільна версія`, () => {
            menuMedia.classShowBurgerMenu()
            menuMedia.classCheckMenuMobile()
            menuMedia.classCollectionMobile()
        });
    });
})