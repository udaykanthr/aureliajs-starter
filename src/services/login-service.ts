import {autoinject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@autoinject()
export class LoginService {

    private isLoggedIn = false;
    private eventAggregator = EventAggregator;
    constructor(eventAggregator: EventAggregator) {
	this.eventAggregator = eventAggregator;
	}

    login() {
	this.isLoggedIn = true;
	this.eventAggregator.publish('nav::toggleLogin', {"loggedIn": true});
    }

    logout() {
	this.isLoggedIn = false;
	this.eventAggregator.publish('nav::toggleLogin', {"loggedIn": false});
    }
    
};
