import {autoinject} from 'aurelia-framework';
import {LoginService} from './../../services/login-service';

@autoinject()
export class Login {
    private loginService =undefined;
    constructor(loginService: LoginService) {
	this.loginService = loginService;
    }

    login() {
	console.log("Login cluecked ...", this.loginService);
	this.loginService.login();
    }
};
