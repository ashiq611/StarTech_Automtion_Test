
import Page from '../page';
import loginObjects from './login.objects';


class LoginPage extends Page {
    public async login (username: string, password: string) {
        await loginObjects.inputUsername.setValue(username);
        await loginObjects.inputPassword.setValue(password);
        await loginObjects.btnSubmit.click();
    }
    public open () {
        return super.open('/account/login');
    }
}

export default new LoginPage();
