import { productSearch } from "../input/search.input"
import homeActions from "../pages/home/home.actions"
import productDetailsActions from "../pages/productDetails/productDetails.actions"
import searchActions from "../pages/search/search.actions"

describe('search and add to cart', () => {
    it("search for a product", async () => {
            // await homeActions.clickOnHomeButton()
            await homeActions.open()
            await homeActions.searchProduct(productSearch)
            await searchActions.searchHeadline()
    })
    it('add to cart', async () => {
        await searchActions.gotoProductDetails()
        await productDetailsActions.quantitySet(5)
        await searchActions.clickonBuyNow()
        await productDetailsActions.viewCartButton()
        await productDetailsActions.cart()

        
    })

})