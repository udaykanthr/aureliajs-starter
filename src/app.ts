import {Redirect} from 'aurelia-router';
import { inject, bindable, observable } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class App {
  
  @bindable
  loggedIn;
  
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
  }
  
  configureRouter(config, router) {
    config.options.pushState = false;
    
    config.map([
      {
        "route": ["", "home"],
        "name": "home",
        "moduleId": "home",
        "nav": true,
        "title": "Home"
      },
      {
        "route": "dashboard",
        "name": "private-page",
        "moduleId": "private-page",
        "nav": true,
        "title": "Dashboard Page",
        // this is going to be available within AuthorizeStep
        "settings": {
          "auth": true
        }
      },
      {
        "route": "login",
        "name": "login",
        "moduleId": "login",
        "nav": true,
        "title": "Login Page",
        "settings": {
          "publicOnly": true
        }
      },
      {
        "route": "register",
        "name": "register",
        "moduleId": "register",
        "nav": true,
        "title": "Register Page",
        "settings": {
          "publicOnly": true
        }
      }
    ]);
    
    config.addPipelineStep('authorize', AuthorizeStep);
    
    this.router = router;
    this.loggedIn = false;
  }
  
  attached() {
    this.eventAggregator.subscribe('nav::toggleLogin', (data) => {
      AuthorizeStep.auth.isAuthenticated = data.loggedIn;
    });
  }
  
}

class AuthorizeStep {

  // substitute auth magic
  static auth = {
    isAuthenticated: false
  }

  run(navigationInstruction, next) {
    let isLoggedIn = AuthorizeStep.auth.isAuthenticated;
    
    // currently active route config
    let currentRoute = navigationInstruction.config;
    
    // settings object will be preserved during navigation
    let loginRequired = currentRoute.settings && currentRoute.settings.auth === true;
    
    if (isLoggedIn === false && loginRequired === true) {
        return next.cancel(new Redirect('login'));
    }
    
    let publicOnly = currentRoute.settings && currentRoute.settings.publicOnly === true;
    if (isLoggedIn === true && publicOnly === true) {
      return next.cancel(new Redirect('dashboard'));
    }
    
    return next();
  }
  
};
