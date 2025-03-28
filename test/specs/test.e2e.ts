import { expect } from '@wdio/globals'
import LoginPage from '../pages/login/login.actions'
// import SecurePage from '../pageobjects/secure.page'
import { password, username } from '../input/login.input'
import accountObject from '../pages/account/account.object'
import homeActions from '../pages/home/home.actions'
import { AccountName } from '../output/account.output'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login(username, password)
        await expect(accountObject.accountName).toHaveText(AccountName)
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveText(
        //     expect.stringContaining('You logged into a secure area!'))
        
    })
    it("search for a product", async () => {
        await homeActions.clickOnHomeButton()
        await homeActions.searchProduct("Hikvision DS-2CE76D0T-ITPF 2 MP Indoor Fixed Turret Camera")



    })
})

