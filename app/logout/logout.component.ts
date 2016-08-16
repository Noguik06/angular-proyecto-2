import {OnInit, Component} from "@angular/core";
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";

/**
 * Created by juannoguera on 4/07/16.
 */

@Component({
    selector: 'logut',
    templateUrl: './app/login/login.html',
    directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
})

export class LogoutComponent implements OnInit{


    constructor (public router: Router) {}

    ngOnInit() {
        localStorage.removeItem("id_token");
        this.router.navigate(['/login']);
    }
}