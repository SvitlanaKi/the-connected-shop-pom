import ProductPage from "../support/page_object/productPage";

describe('Product Page',()=> {
    const productPage = new ProductPage()
    beforeEach(() => {

        Cypress.on(`uncaught:exception`,(err,runnable) =>{
            return false;
        });
    })
    it(`Add product`, () =>{
        productPage.classOpenProductPage();
        productPage.classNameProduct();
        productPage.classIdProduct();
        productPage.classStarsProduct();
        productPage.classNumberProduct();
        productPage.classAddProduct();
        productPage.classAddBuy();
       /* productPage.classBuyProduct();*/
    });
});