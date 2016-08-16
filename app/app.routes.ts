import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {SignUpComponent} from "./signup/signup.component";
import {SearchUserComponent} from "./users/searchuser.component";
import {EditUserComponent} from "./users/user-detail.component";
import {File_Upload} from "./files/files.component";
import {LogoutComponent} from "./logout/logout.component";

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'searchUsers',
        component: SearchUserComponent
    },
    {
        path: 'editUsers/:cedula',
        component: EditUserComponent
    },
    {
        path: 'files',
        component: File_Upload
    },
    {
        path: 'logout',
        component: LogoutComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */