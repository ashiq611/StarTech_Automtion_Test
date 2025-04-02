import { expect } from '@wdio/globals'
import LoginPage from "../pages/login/login.actions";
import { password, username } from "../input/login.input";
import accountPage from "../pages/account/account.actions";
import homeActions from "../pages/home/home.actions";
import { AccountName } from "../output/account.output";
import { expectedNoProductMessage, noProductSearch, productSearch } from "../input/search.input";
import searchActions from "../pages/search/search.actions";
import productDetailsActions from "../pages/productDetails/productDetails.actions";
import cartActions from "../pages/cart/cart.actions";

describe("StarTech.com.bd Website Test Suite", () => {
  beforeEach(async () => {
    await LoginPage.open();
  });
  it("TC01: should login with valid credentials", async () => {
    await LoginPage.login(username, password);
    await accountPage.checkAccountName(AccountName);
  });
  it("TC02: Should search for a product and verify results", async () => {
    await homeActions.clickOnHomeButton();
    // await homeActions.open()
    await homeActions.searchProduct(productSearch);
    const url = await browser.getUrl();
    expect(url.includes("search")).toBeTruthy();
    const searchHeadline = await searchActions.searchHeadline();
    expect(searchHeadline).not.toBeNull();
    expect(searchHeadline).toEqual("Search - " + productSearch);
  });
  it("TC03: Should set quantity and add product to cart", async () => {
    await homeActions.searchProduct(productSearch);
    await searchActions.gotoProductDetails();
    await productDetailsActions.quantitySet(5);
    await searchActions.clickonBuyNow();
    await productDetailsActions.viewCartButton();
    await productDetailsActions.cart();
    const url = await browser.getUrl();
    expect(url).toContain('checkout');
  });
  it('TC04: should verify the total price calculation', async () => {
    await cartActions.open();

    const quantity = await cartActions.getQuantity();
    console.log(quantity, "quantity")
    const unitPrice = await cartActions.getUnitPrice();
    console.log(unitPrice, "unit price")
    const totalPrice = await cartActions.getTotalPrice();
    console.log(totalPrice, "total price")
    const expectedTotal = quantity * unitPrice;
    console.log(expectedTotal, "expected total")
    expect(totalPrice).toBe(expectedTotal);
  });
  it("TC05: should clear all items from cart", async () => {
    await productDetailsActions.cart(); 
    await productDetailsActions.clearAllCartItems();
    const cartItems = await $$(".item");
    expect(cartItems.length).toBe(0);
  });
  it('TC06: Should handle invalid search input', async () => {
    await homeActions.searchProduct(noProductSearch);
   const actualMessage = await searchActions.noProductsMessage();
   console.log(`Actual message found: "${actualMessage}"`);
   expect(actualMessage).toEqual(expectedNoProductMessage);
});
  it("TC07: should log out from the application", async () => {
    await accountPage.clickLogoutButton();
  });
});
