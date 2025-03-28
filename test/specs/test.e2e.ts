import { expect } from '@wdio/globals'
import LoginPage from '../pages/login/login.actions'
import { password, username } from '../input/login.input'
import accountObject from '../pages/account/account.object'
import homeActions from '../pages/home/home.actions'
import { AccountName } from '../output/account.output'
import { productSearch } from '../input/search.input'
import searchActions from '../pages/search/search.actions'

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
        await homeActions.searchProduct(productSearch)
        await searchActions.searchHeadline()
        



    })
})

