import { navigateTo } from "./navigation";

export class itemsHome {
    verifySlidersLength() {
        cy.get('.n2-ss-slider-3 .n2-ss-slide').should('have.length', 3);
    };

    verifyArrivalsLength() {
        cy.get('.themify_builder_sub_row .col3-1').should('have.length', 3);    
    };

    verifyArrivalsImageIsClickable() {
        cy.get('.products li').as('productItems');
        
        cy.get('@productItems').its('length').then((itemCount) => {
            cy.wrap(itemCount).as('itemCount');
        });

        cy.get('@itemCount').then((itemCount) => {
            for(let i = 0; i < itemCount; i++) {
                cy.get('@productItems').eq(i).find('a .attachment-shop_catalog').then(($img) => {
                    const link = $img.parent('a').attr('href');
                    cy.log(link);

                    if (link) {
                        cy.wrap($img).should('be.visible').click();
                        cy.url().should('include', link);
                        cy.get('button').contains('Add to basket').click();
                        cy.wait(1000);
                        cy.get('.woocommerce-message').should('be.visible');
                        navigateTo.homePage();
                        cy.get('@productItems').eq(i).find('a img').should('be.visible');
                    } else {
                        cy.log('No such attribute');
                    }
                });
            };
        });
    };

    varifyArrivalsImagesHasDescription() {
        cy.get('.products li').as('productItems');
        
        cy.get('@productItems').its('length').then((itemCount) => {
            cy.wrap(itemCount).as('itemCount');
        });

        cy.get('@itemCount').then((itemCount) => {
            for(let i = 0; i < itemCount; i++) {
                cy.get('@productItems').eq(i).find('a .attachment-shop_catalog').then(($img) => {
                    const link = $img.parent('a').attr('href');
                    cy.log(link);

                    if (link) {
                        cy.wrap($img).should('be.visible').click();
                        cy.url().should('include', link);
                        cy.get('.description_tab')
                            .should('have.class', 'active')
                            .should('be.visible');
                        cy.get('#tab-description')
                            .should('be.visible')
                            .contains('Product Description');
                        navigateTo.homePage();
                    } else {
                        cy.log('No such attribute');
                    }
                });
            }
        });
    };


    varifyArrivalsImagesHasReview() {
        cy.get('.products li').as('productItems');
        
        cy.get('@productItems').its('length').then((itemCount) => {
            cy.wrap(itemCount).as('itemCount');
        });

        cy.get('@itemCount').then((itemCount) => {
            for(let i = 0; i < itemCount; i++) {
                cy.get('@productItems').eq(i).find('a .attachment-shop_catalog').then(($img) => {
                    const link = $img.parent('a').attr('href');
                    cy.log(link);

                    if (link) {
                        cy.wrap($img).should('be.visible').click();
                        cy.url().should('include', link);
                        cy.get('.reviews_tab').click();
                        cy.get('.reviews_tab')
                            .should('have.class', 'active');
                        cy.get('#reviews')
                            .should('be.visible')
                            .contains('Reviews');
                        navigateTo.homePage();

                    } else {
                        cy.log('No such attribute');
                    }
                });
            }
        });
    };
};

export const verifyItems = new itemsHome();