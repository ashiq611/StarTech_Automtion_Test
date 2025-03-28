import { $ } from '@wdio/globals'


class loginObjects {
     public get inputUsername () {
            return $('#input-username');
        }
    
        public get inputPassword () {
            return $('#input-password');
        }
    
        public get btnSubmit () {
            return $("//form[@action='https://www.startech.com.bd/account/login']//button[@type='submit' and contains(text(), 'Login')]");
        }
    
}

export default new loginObjects();