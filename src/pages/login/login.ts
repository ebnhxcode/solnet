import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs'
import { 
    AlertController, 
    LoadingController,
    NavController
} from 'ionic-angular';
import { UserService } from '../../services/mocks/user.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage{

	user = {"email":"", "password":""};

	constructor(
        private alertCtrl: AlertController, 
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        private userService:UserService,
        public http: Http,
    ){
        this.http = http;
    }

    ngOnInit(){
        //console.log("arranco el init");
/*
    this.http
    .post('http://localhost:3001/sessions/create', body, { headers: headers })
    .map(response => response.json())
    .subscribe(
      response => this.storeToken(response.id_token),
      this.logError,
      () => console.log('Authentication Complete')
    );
*/
        this.http
        .get('https://jsonplaceholder.typicode.com/posts')
        .map(response => {
            console.log(response.json());
        });
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
                )


            
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