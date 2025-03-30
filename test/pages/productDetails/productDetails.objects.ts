

class productDetailsObjects {

    public get quantityInput() {
        return $('#input-quantity');
    }
    
    public get viewCartButton() {
        return $('a[href="https://www.startech.com.bd/checkout/cart"] button.btn');
    }

    public get cart() {
        return $("#cart");
    }

    public get allDeleteButtons():Promise<WebdriverIO.ElementArray> {
        return $$('.remove');;
    }
}

export default new productDetailsObjects();