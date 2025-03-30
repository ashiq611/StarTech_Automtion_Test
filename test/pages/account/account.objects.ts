class accountObjects {
    public get accountName () {
        return $("//div[@class='name']/p[@class='user']");
    }

    public get logoutButton () {
        return $('//div[@class="ac-content"]//a[text()="Logout"]');
    }
    

}

export default new accountObjects();