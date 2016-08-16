/**
 * Created by juannoguera on 24/07/16.
 */
import {OnInit, Component, NgZone} from "@angular/core";
import {FileService} from "./file.service";
import {Router} from "@angular/router";
import {File} from "./files";
import {User} from "../users/user";

@Component({
    selector: 'demo',
    templateUrl: './app/files/files.html',
    styleUrls: ['./app/common/bootstrap/dist/css/bootstrap.min.css',
        './app/common/metisMenu/dist/metisMenu.min.css',
        './app/home/dist/css/sb-admin-2.css',
        './app/home/bower_components/font-awesome/css/font-awesome.min.css'],
    providers: [ FileService ],
    pipes: []
})

export class File_Upload implements OnInit{

    userComponent : User;

    zone: NgZone;
    options: Object = {
        url: 'http://ng2-uploader.com:10050/upload'
    };
    basicProgress: number = 0;
    basicResp: Object;
    multipleProgress: number = 0;
    multipleResp: any[] = [];
    dropProgress: number = 0;
    dropResp: any[] = [];

    //Variable para subir el archivo
    myfile : File;
    //Variable para colocar todos los archivos que traemos del backend
    files : File[];

    constructor(private fileService: FileService, public router: Router) {
        this.zone = new NgZone({ enableLongStackTrace: false });
    }

    handleBasicUpload(data): void {
        this.basicResp = data;
        this.zone.run(() => {
            this.basicProgress = data.progress.percent;
        });
    }

    handleMultipleUpload(data): void {
        let index = this.multipleResp.findIndex(x => x.id === data.id);
        if (index === -1) {
            this.multipleResp.push(data);
        }
        else {
            this.zone.run(() => {
                this.multipleResp[index] = data;
            });
        }

        let total = 0, uploaded = 0;
        this.multipleResp.forEach(resp => {
            total += resp.progress.total;
            uploaded += resp.progress.loaded;
        });

        this.multipleProgress = Math.floor(uploaded / (total / 100));
    }

    handleDropUpload(data): void {
        let index = this.dropResp.findIndex(x => x.id === data.id);
        if (index === -1) {
            this.dropResp.push(data);
        }
        else {
            this.zone.run(() => {
                this.dropResp[index] = data;
            });
        }

        let total = 0, uploaded = 0;
        this.dropResp.forEach(resp => {
            total += resp.progress.total;
            uploaded += resp.progress.loaded;
        });

        this.dropProgress = Math.floor(uploaded / (total / 100));
    }

    //Metodo encargado de cuando se carga el archivo lo guarde en la varibale myfile
    fileChangeEvent(fileInput: any){
        this.myfile = fileInput.target.files[0];
    }

    //Metodo encargado de subir los archivos
    upload_file(){
        this.fileService.upload_file(this.myfile);
        location.reload();
    }

    //Metodo para traer los usuarios
    getFiles() {
        this.fileService.getFiles()
            .subscribe(
                response => {
                    this.files  = response;
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
        }else {
            this.userComponent = new User();
            this.userComponent.nombre = localStorage.getItem("name");
            this.userComponent.tipo = localStorage.getItem("type_user");
            this.getFiles();
        }
    }

    //Metodo para ir de un link a otro
    goTo(source){
        let link = ['/' + source];
        this.router.navigate(link);
    }
}