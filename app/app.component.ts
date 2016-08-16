import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {HTTP_PROVIDERS} from "@angular/http";
import {LoginService} from "./login/login.service";
import { Router} from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
    <router-outlet></router-outlet>
  `,
    styleUrls: ['app/app.component.css'],
    providers: [ HTTP_PROVIDERS, LoginService],
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit{

    constructor (public router: Router) {}

    tokenJWT : String;

    title = 'Tour of Heroes';
    ngOnInit() {
        this.tokenJWT = localStorage.getItem("id_token");
    }

    goTo(source){
        let link = ['/' + source];
        this.router.navigate(link);

    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */