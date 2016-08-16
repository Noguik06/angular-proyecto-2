/**
 * Created by juannoguera on 26/07/16.
 */
import {OnInit, Component} from "@angular/core";
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Jsonp, URLSearchParams } from '@angular/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";

/**
 * Created by juannoguera on 4/07/16.
 */

@Component({
    selector: 'navigate-list',
    template: `<nav>
      <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
      <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
      <a *ngIf="tokenJWT == null" [routerLink]="['/login']" routerLinkActive="active">Login</a>
      <a [routerLink]="['/home']" routerLinkActive="active">Home</a>
      <a [routerLink]="['/signup']" routerLinkActive="active">Registro</a>
      <a [routerLink]="['/searchUsers']" routerLinkActive="active">Buscar Usuarios</a>
      <a [routerLink]="['/upload']" routerLinkActive="active">Subir Archivos</a>
    </nav>`,
    directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ]
})

export class Navigate {

}