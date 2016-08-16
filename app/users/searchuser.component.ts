import {OnInit, Component, Input, Output} from "@angular/core";
import {UserService} from "./user.service";
import { Router} from '@angular/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {User} from "../users/user";
import {CustomerEmailFilter} from "./customerEmailFilter";

/**
 * Created by juannoguera on 4/07/16.
 */

@Component({
    selector: 'serchUser-component',
    templateUrl: './app/users/searchuser.html',
    styleUrls: ['./app/common/bootstrap/dist/css/bootstrap.min.css',
        './app/common/metisMenu/dist/metisMenu.min.css',
        './app/theme/dist/css/sb-admin-2.css',
        './app/theme/bower_components/font-awesome/css/font-awesome.min.css'],
    directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
    pipes: [CustomerEmailFilter],
    providers: [ UserService ]
})

export class SearchUserComponent implements OnInit{

    @Input() term;

    userSearchUser : User;

    private nombre: string = '';

    users: User[];
    errorMessage: string;
    mode = 'Observable';

    constructor (private userService: UserService, public router: Router) {}



    //Metodo para traer los usuarios
    getUsers() {
        this.userService.getUsers()
            .subscribe(
                response => {
                    this.users  = response;
                },
                error => {
                    alert('hay un error');
                    alert(error.text());
                    console.log(error.text());
                }
                /*login => this.login_ = login,
                error =>  this.errorMessage = <any>error*/
            );
    }




    //En el metodo inicial llamamos al metodo que me trae los usuarios
    ngOnInit() {
        if(localStorage.getItem("id_token") == null){
            this.router.navigate(['/login']);
        }else{
            this.userSearchUser = new User();
            this.userSearchUser.nombre = localStorage.getItem("name");
            this.userSearchUser.tipo = localStorage.getItem("type_user");
            this.getUsers();
        }
    }

    //metodo para ir a editar cada usuario
    goToEditUser(user:User){
        let link = ['/editUsers',user.idusuario];
        this.router.navigate(link);
    }

    goTo(source){
        let link = ['/' + source];
        this.router.navigate(link);

    }
}