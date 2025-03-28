class accountObjects {
    public get accountName () {
        return $("//div[@class='name']/p[@class='user']");
    }

}

export default new accountObjects();