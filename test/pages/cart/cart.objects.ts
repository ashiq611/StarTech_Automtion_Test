class cartObjects {
    public get quantityInput() {
        return $$('//input[@type="text" and @class="form-control"]');
    }

    public get unitPrice() {
        return $('//td[@class="text-right rs-none" and contains(text(), "৳")]');
    }

    public get totalPrice() {
        return $('//td[@class="text-right" and not(@class="rs-none") and contains(text(), "৳")]');
    }


}

export default new cartObjects();