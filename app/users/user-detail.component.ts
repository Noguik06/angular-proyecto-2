import {OnInit, Component, Input} from "@angular/core";
import {UserService} from "./user.service";
import {Router, ActivatedRoute} from '@angular/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {User} from "../users/user";
import {CustomerEmailFilter} from "./customerEmailFilter";
import {ResponseService} from "../common/response";

/**
 * Created by juannoguera on 4/07/16.
 */

@Component({
    selector: 'user-detail-component',
    templateUrl: './app/users/userEdit.html',
    styleUrls: ['./app/common/bootstrap/dist/css/bootstrap.min.css',
        './app/common/metisMenu/dist/metisMenu.min.css',
        './app/theme/dist/css/sb-admin-2.css',
        './app/theme/bower_components/font-awesome/css/font-awesome.min.css'],
    directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
    pipes: [CustomerEmailFilter],
    providers: [ UserService ]
})

export class EditUserComponent implements OnInit{

    @Input() term;
    @Input() user : User;

    private nombre: string = '';

    users: User[];
    responseService: ResponseService;
    errorMessage: string;
    mode = 'Observable';
    sub: any;
    userComponent : User;

    constructor (private userService: UserService, private route: ActivatedRoute, private router : Router) {}

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
            this.userComponent = new User();
            this.userComponent.nombre = localStorage.getItem("name");
            this.userComponent.tipo = localStorage.getItem("type_user");
            this.sub = this.route.params.subscribe(params => {
                if (params['cedula'] !== undefined) {
                    let cedula = params['cedula'];
                    this.userService.getUserByCedula(cedula)
                        .subscribe(
                            response => {
                                this.users  = response;
                                this.user = this.users[0];
                            },
                            error => {
                                alert('hay un error');
                                alert(error.text());
                                console.log(error.text());
                            }
                            /*login => this.login_ = login,
                             error =>  this.errorMessage = <any>error*/
                        );


                } else {

                }
            });
        }
    }

    //Metodo para actualizar un usuario
    update_user(password){
        this.userService.updateUser(this.user.idusuario, this.user.cedula, this.user.nombre, this.user.email, password)
            .subscribe(
                response => {
                    this.responseService  = response;
                    alert(this.responseService.message);
                    this.router.navigate(['/searchUsers']);
                },
                error => {
                    if(error == '401'){
                        alert("No se ha podido realizar la actualización. Ya existe otro usuario con esa cedula");
                    }else{
                        alert("Ha ocurrido un error actualizando el usuario");
                    }
                    console.log(error.text());
                }
                /*login => this.login_ = login,
                 error =>  this.errorMessage = <any>error*/
        );
    }

    goTo(source){
        let link = ['/' + source];
        this.router.navigate(link);

    }
}