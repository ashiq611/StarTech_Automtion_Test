import productDetailsObjects from "./productDetails.objects";


class productDetailsPage {

    public async quantitySet(quantity: number) {
        
        // console.log(quantity, "quantity")
        const quantityInput = await productDetailsObjects.quantityInput;
        await quantityInput.waitForClickable({ timeout: 5000 });
        await quantityInput.click();
         await quantityInput.clearValue();
         await quantityInput.click();
         await browser.keys(quantity.toString());
         await browser.pause(2000);
    }

        public async viewCartButton() {
            await productDetailsObjects.viewCartButton.waitForDisplayed({ timeout: 5000 });
            await productDetailsObjects.viewCartButton.click();
            await browser.pause(2000);
    
        }
    
        public async cart() {
            await productDetailsObjects.cart.waitForDisplayed({ timeout: 5000 });
            await productDetailsObjects.cart.click();
            await browser.pause(2000);
        }
   
}


export default new productDetailsPage();