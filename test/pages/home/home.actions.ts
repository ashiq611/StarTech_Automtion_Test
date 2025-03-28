import homeObjects from "./home.objects";

class homepage {

    public async clickOnHomeButton() {
        await homeObjects.homepagelogo.click();
    }
    public async searchProduct(searchText: string) {
        await homeObjects.searchInput.setValue(searchText);
        await browser.keys("Enter");
    }

}

export default new homepage();