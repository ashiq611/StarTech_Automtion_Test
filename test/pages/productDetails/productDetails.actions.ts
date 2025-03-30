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

        public async clearAllCartItems(): Promise<void> {
            try {
                // Ensure cart is loaded
                // const container = await productDetailsObjects.cartContainer;
                // await container.waitForDisplayed({ timeout: 10000 });
                // console.log('Cart container found');
    
                // Get all delete buttons
                let deleteButtons: WebdriverIO.ElementArray = await productDetailsObjects.allDeleteButtons;
                console.log(`Found ${deleteButtons.length} items to remove`);
    
                if (deleteButtons.length === 0) {
                    console.log('No items found in cart to remove');
                    return;
                }
    
                // Click each delete button with retry logic
                while (deleteButtons.length > 0) {
                    const button: WebdriverIO.Element = deleteButtons[0]; // Click first button
                    await button.scrollIntoView(); // Ensure it’s in view
                    await button.waitForClickable({ timeout: 10000 });
                    console.log('Clicking delete button');
                    await button.click();
    
                    // Wait for cart to update
                    await browser.waitUntil(
                        async () => {
                            const updatedButtons: WebdriverIO.ElementArray = await productDetailsObjects.allDeleteButtons;
                            return updatedButtons.length < deleteButtons.length;
                        },
                        {
                            timeout: 5000,
                            timeoutMsg: 'Cart did not update after deletion',
                            interval: 500,
                        }
                    );
    
                    // Refresh delete buttons list
                    deleteButtons = await productDetailsObjects.allDeleteButtons;
                    console.log(`Remaining items: ${deleteButtons.length}`);
                }
    
                console.log('All items removed from cart');
            } catch (error) {
                console.error('Failed to clear cart:', error);
                throw error;
            }
        }
   
}


export default new productDetailsPage();