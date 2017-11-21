import { autoinject, bindable, observable } from 'aurelia-framework';
import {routes} from './routes';
import { EventAggregator } from 'aurelia-event-aggregator';
import { AuthorizeStep } from '../src/component/auth/auth-step'; 

@autoinject()
export class App {
    
    @bindable
    loggedIn;

    private eventAggregator = undefined;
    
    constructor(eventAggregator:EventAggregator) {
	this.eventAggregator = eventAggregator;
    }
    
    configureRouter(config, router) {
	config.options.pushState = true;

	config.map(routes);
	config.addPipelineStep('authorize', AuthorizeStep);
	
	// this.router = router;
	this.loggedIn = false;
    }
    
    attached() {
	this.eventAggregator.subscribe('nav::toggleLogin', (data) => {
	    console.log("Logged in/out command recieved ...", data);
	    AuthorizeStep.auth.isAuthenticated = data.loggedIn;
	});
    }
    
}


