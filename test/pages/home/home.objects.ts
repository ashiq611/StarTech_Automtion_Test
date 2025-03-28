class homeObjects {

    public get homepagelogo() {
        return $("//div[@class='ht-item logo']//a[@class='brand']/img");
    }

    public get searchInput() {
        return $("//div[@class='ht-item search' and @id='search']//input[@type='text' and @name='search']");
    }

}

export default new homeObjects();