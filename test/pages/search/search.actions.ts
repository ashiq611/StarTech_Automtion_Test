import { productSearch } from "../../input/search.input";
import searchObjects from "./search.objects";

class searchPage {
    public async searchHeadline() {
       const headingText =  await searchObjects.searchPageHeading;
       const getText = await headingText.getText();
       expect(getText).toEqual("Search - " + productSearch);
    }
}


export default new searchPage();