

class searchObjects {
    public get searchPageHeading() {
       return $("//h4[@class='page-heading']");

    }
    public get searchResult() {
        return $("//div[@class='product-item']//a[@class='product-title']");
    }

    public get noProductsMessage(){
        return $('#content p'); // Targets the <p> inside #content
    }

    public get productDetails() {
        return $('//div[@class="p-item"][1]//div[@class="p-item-img"]/a/img');
    }


    public get incrementButton() {
        return $("//span[@class='ctl increment'][1]/@class");
    }

    public get buyNowButton() {
        return $('//button[@id="button-cart"][1]');
    }

    
}

export default new searchObjects();