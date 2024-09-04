import { navigateTo } from "../support/page_object/navigation";
import { verifyItems } from "../support/page_object/itemsHome";

describe('Home page test cases', () => {
  beforeEach('open site', () => {
    cy.openHomePage();    
  });

  it('Home page with three Sliders only', () => {
    navigateTo.shopPage();
    navigateTo.homePage();
    verifyItems.verifySlidersLength();
  });

  it('Home page with three Arrivals only', () => {
    navigateTo.shopPage();
    navigateTo.homePage();
    verifyItems.verifyArrivalsLength();
  });

  it.only('Home page - Images in Arrivals should navigate', () => {
    navigateTo.shopPage();
    navigateTo.homePage();
    verifyItems.verifyArrivalsLength();
    verifyItems.verifyArrivalsImageIsClickable();
  })


 
});