import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';
import { Navigate } from '../../app/common/navigate/navigate';
import {User} from "../users/user";
/**
 * Created by juannoguera on 4/07/16.
 */

@Component({
    selector: 'home',
    styleUrls: ['./app/common/bootstrap/dist/css/bootstrap.min.css',
        './app/common/metisMenu/dist/metisMenu.min.css',
        './app/home/dist/css/sb-admin-2.css',
        './app/home/bower_components/font-awesome/css/font-awesome.min.css'],
    templateUrl: './app/home/home.html'
})

export class HomeComponent  implements OnInit{

    constructor (public router: Router) {}

    userHome : User;

    ngOnInit() {
        if(localStorage.getItem("id_token") == null){
            this.router.navigate(['/login']);
        }else{
            this.userHome = new User();
            this.userHome.nombre = localStorage.getItem("name");
            this.userHome.tipo = localStorage.getItem("type_user");
        }
    }

    goTo(source){
        let link = ['/' + source];
        this.router.navigate(link);

    }
}