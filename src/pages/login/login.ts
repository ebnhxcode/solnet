import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs'
import { 
    AlertController, 
    LoadingController,
    NavController
} from 'ionic-angular';
import { UserService } from '../../services/mocks/user.service';

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
        private userService:UserService
        ) {
    }

    ngOnInit(){
        console.log("arranco el init");
        //si el usuario esta logueado redireccionar a la home
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