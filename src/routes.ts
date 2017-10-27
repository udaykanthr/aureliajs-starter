export var routes = [
    { route: ['login'],  name: 'login',   moduleId: './component/auth/login', nav: true, title: 'Login Authentication', auth: false},
    { route: ['', 'home'],  name: 'Role Navigator',  moduleId: 'home',  nav: false, title:'Dashboard', auth: false},
    { route: ['dashboard'],  name: 'dashboard',  moduleId: './component/dashboard/dashboard',  nav: true, title:'Dashboard', auth: true},
];
