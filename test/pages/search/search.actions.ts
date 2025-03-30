import { productSearch } from "../../input/search.input";
import searchObjects from "./search.objects";

class searchPage {
    public async searchHeadline() {
       const headingText =  await searchObjects.searchPageHeading;
       const getText = await headingText.getText();
       expect(getText).toEqual("Search - " + productSearch);
    }
    public async gotoProductDetails() {
        const imageElement = await searchObjects.productDetails;

        await imageElement.waitForDisplayed({ timeout: 5000 }); // Wait up to 5 seconds for the image to be visible

        // Click the image
        await imageElement.click();
    }

    public async clickonBuyNow() {
        console.log("click on buy now")
        const buyNowButton = await searchObjects.buyNowButton;
        console.log(buyNowButton, "buy now button")
        await buyNowButton.waitForDisplayed({ timeout: 5000 });
        await buyNowButton.click();
        await browser.pause(2000);
    }

    
}


export default new searchPage();