class ProductPage {
    classOpenProductPage () {
        cy.visit(`https://theconnectedshop.com/collections/smart-locks/products/smart-lock-box`);
        cy.viewport(1920,1080);
    }
    classNameProduct (){
        cy.get('.ProductMeta__Title')
            .should('exist')
            .and(`be.visible`)
    }
    classIdProduct(){
        cy.get('.ProductMeta__Sku')
            .should(`exist`)
            .and (`be.visible`)
    }
    classStarsProduct (){
        cy.get(`.jdgm-prev-badge`)
            .should(`exist`)
            .and (`be.visible`)
    }
    classNumberProduct(){
        cy.get('.ProductForm__QuantitySelector')
            .should(`exist`)
            .and (`be.visible`)
    }
    classAddProduct(){
        cy.get('[data-action="increase-quantity"]')
            .should(`exist`)
            .and (`be.visible`)
            .click()
            .click()
    }
    classAddBuy(){
        cy.get('.ProductForm__AddToCart')
            .should(`exist`)
            .and (`be.visible`)
            .click()

    }
  /*  classBuyProduct(){
        cy.get('.Cart__Checkout Button Button--primary Button--full')
            .should(`exist`)
            .and (`be.visible`)
            .click()
    }*/
}

export default ProductPage;