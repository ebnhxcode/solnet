import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs'
import { 
    AlertController, 
    LoadingController,
    NavController
} from 'ionic-angular';
import { UserService } from '../../services/mocks/user.service';
import { Http, Headers, RequestOptions /*Response*/ } from '@angular/http';


import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage{

	user = {"email":"", "password":""};

	constructor(
        private alertCtrl: AlertController, 
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        private userService:UserService,
        private http: Http,
    ){
        //Opcion 3 - POST
         var link = 'https://201.238.235.30/fmi/rest/api/auth/Tasks_FMAngular';
         let headers = new Headers({'Content-Type': 'application/json'});
         let options = new RequestOptions({ headers: headers });
         var myData = {
            user:"nuevo",
            password:"1234",
            layout:"prueba"
         };
         
         this.http.post(link, myData, options)
         .subscribe(data => {
             //this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
             console.log(data);
         }, error => {
         console.log("Oooops!");
         });

       /*
        //Opcion 2 - POST
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        let url_login="https://201.238.235.30/fmi/rest/api/auth/Tasks_FMAngular";
        let body = JSON.stringify({
            user:"nuevo",
            password:"1234",
            layout:"prueba"
        });
        this.http.post(url_login, body, {headers: headers})
        .map(res => res.json())
        .subscribe(data=>{
            console.log(data);
        });
        */


        /*
        let url_login: string = 'https://201.238.235.30/fmi/rest/api/auth/Tasks_FMAngular';
        let body = {
            'user':'nuevo',
            'password':'1234',
            'layout':'prueba'
        };

        //Opcion 1 - POST
        this.http.post(url_login, body, {headers: headers})
        .map(response => response.json())
        .subscribe(
          response => console.log(response),
          () => console.log('Authentication Complete')
        );
        */

        /*
        // Url para probar metodo GET con angular
        //let url: string = 'https://jsonplaceholder.typicode.com/posts';
        let url: string = 'https://201.238.235.30/fmi/rest/api/record/Tasks_FMAngular/prueba';

        //Opcion 1 - GET
        this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
            console.log(data);
        });
        */

        /*
        this.http.post('http://localhost:3001/sessions/create', body, { headers: headers })
        .map(response => response.json())
        .subscribe(
          response => this.storeToken(response.id_token),
          this.logError,
          () => console.log('Authentication Complete')
        );
        */

        //Opcion 2 - GET
        /*
        this.http.get(url)
        .do(res => res.json()).
        subscribe(data => {
            console.log(data)
        });
        */
    }

    ngOnInit(){
        console.log("arranco el init");
    }

	login = ():void=>{
        if (this.user.email != "" && this.user.password != ""){
            
            let usuarios;
            let loading = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
            let login:false;
            this.userService
                .loginUser(this.user.email, this.user.password)
                .then(
                    (response)=>{
                        loading.dismiss();
                        if(response!==undefined){
                            this.navCtrl.push(TabsPage);
                        }else{
                            let alert = this.alertCtrl.create({
                                title: 'Login',
                                subTitle: 'Usuario y/o contraseña invalida.',
                                buttons: ['Aceptar']
                            });
                            alert.present();
                        }
                    }
                );

           

            
        }else{

            let alert = this.alertCtrl.create({
                    title: 'Login',
                    subTitle: 'Complete los campos',
                    buttons: ['Aceptar']
                });
                alert.present();
        }

       
    }


    signIn = ():void=>{
        alert("signIn");
    }

}