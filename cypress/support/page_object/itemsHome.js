export class itemsHome {
    verifySlidersLength() {
        cy.get('.n2-ss-slider-3 .n2-ss-slide').should('have.length', 3);
    };

    verifyArrivalsLength() {
        cy.get('.themify_builder_sub_row .col3-1').should('have.length', 3);    
    };

    verifyArrivalsImageIsClicable() {
        cy.get('.products li').each(($item, index) => {
            cy.wrap($item).find('a img').as('image');

            cy.get('@image').then(($img) => {
                const link = $img.parent('a').attr('href');
                cy.log('Link:', link);

                if(link) {
                    cy.wrap($img).click();
                    cy.url().should('include', link);
                    cy.go('back');
                    cy.get('.products li').eq(index).find('a img').should('be.visible');
                    cy.wait(1000);
                } else {
                    cy.log('No ref att');
                }
            });
            
        });
    };


};

export const verifyItems = new itemsHome();