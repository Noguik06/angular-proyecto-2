"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var heroes_component_1 = require('./heroes.component');
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var signup_component_1 = require("./signup/signup.component");
var searchuser_component_1 = require("./users/searchuser.component");
var user_detail_component_1 = require("./users/user-detail.component");
var files_component_1 = require("./files/files.component");
var logout_component_1 = require("./logout/logout.component");
var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'signup',
        component: signup_component_1.SignUpComponent
    },
    {
        path: 'searchUsers',
        component: searchuser_component_1.SearchUserComponent
    },
    {
        path: 'editUsers/:cedula',
        component: user_detail_component_1.EditUserComponent
    },
    {
        path: 'files',
        component: files_component_1.File_Upload
    },
    {
        path: 'logout',
        component: logout_component_1.LogoutComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=app.routes.js.map