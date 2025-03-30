import accountObjects from "./account.objects";

class accountPage {

    public async checkAccountName(name: string) {
        await expect(accountObjects.accountName).toHaveText(name)

    }

    public async clickLogoutButton() {
        await accountObjects.logoutButton.click();
    }

   
}

export default new accountPage();