import Page from "../page";
import cartObjects from "./cart.objects";

class Cart extends Page {
 
  async getQuantity() {
    const quantityElements = await cartObjects.quantityInput;
    console.log(quantityElements, "quantity elements");

    if (!quantityElements.length) {
      throw new Error("No quantity input elements found on the page");
    }

    const quantityElement = quantityElements[0]; 

    const quantityValue = await quantityElement.getValue(); 


    return parseInt(quantityValue, 10) || 0; 
  }

  async getUnitPrice() {
    const unitPriceElement = await cartObjects.unitPrice; 
    const unitPriceText = await unitPriceElement.getText(); 
    console.log(unitPriceText, "unit price text")
    return parseInt(unitPriceText.replace(/[^0-9]/g, ""), 10); 
  }

 
  async getTotalPrice() {
    const totalPriceElement = await cartObjects.totalPrice;
    const totalPriceText = await totalPriceElement.getText();
    console.log(totalPriceText, "total price text")
    return parseInt(totalPriceText.replace(/[^0-9]/g, ""), 10); 
  }

  public open () {
    return super.open('/checkout/cart');
}
}

export default new Cart(); // Export an instance of the Cart class