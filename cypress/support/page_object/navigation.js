const selectMenuItem = (menuName) => {
    cy.get('#menu-icon').click();
    cy.contains('a', menuName).click();
};

const navigationItems = (nav) => {
    cy.contains('a', nav).click();
};


export class NavigationPage {
    shopPage() {
        selectMenuItem('Shop');
    };
    
    homePage() {
        navigationItems('Home');

    };
};

export const navigateTo = new NavigationPage();