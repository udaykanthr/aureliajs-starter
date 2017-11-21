import {Redirect} from 'aurelia-router';

export class AuthorizeStep {

    // substitute auth magic
    static auth = {
	isAuthenticated: false
    };

    run(navigationInstruction, next) {
	console.log("Inside auth step ... ", AuthorizeStep.auth.isAuthenticated);
	let isLoggedIn = AuthorizeStep.auth.isAuthenticated;
	
	// currently active route config
	let currentRoute = navigationInstruction.config;
	
	// settings object will be preserved during navigation
	let loginRequired = currentRoute && currentRoute.auth === true;
	
	if (isLoggedIn === false && loginRequired === true) {
            return next.cancel(new Redirect('login'));
	}
	
	let publicOnly = currentRoute && currentRoute.publicOnly === true;
	if (isLoggedIn === true && publicOnly === true) {
	    return next.cancel(new Redirect('dashboard'));
	}
	
	return next();
    };
    
};
