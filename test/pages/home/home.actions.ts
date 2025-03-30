import Page from "../page";
import homeObjects from "./home.objects";

class homepage extends Page {

    public async clickOnHomeButton() {
        await homeObjects.homepagelogo.click();
    }
    public async searchProduct(searchText: string) {
        await homeObjects.searchInput.setValue(searchText);
        await browser.keys("Enter");
    }

    public open () {
        return super.open('');
    }

}

export default new homepage();