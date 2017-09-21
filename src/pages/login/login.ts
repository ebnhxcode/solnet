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

		//var url = 'http://solnetjson.grown.cl/test/connection';
		var url = 'http://local.solnetjson/test/connection';

		this.http.get(url)
		.map(res => res.json())
		.subscribe(data => {
			console.log(data);
		});

		/*
		//Opcion 4 Final - POST
		var base_uri = 'https://201.238.235.30/';

		var service_data = {
			'solution'	: 'Tasks_FMAngular',
			'layout'	: 'prueba',
			'verify'	: false
		};

		var uri_stuff = {
			'login' 	: 'fmi/rest/api/auth/:solution',
			'logout' 	: 'fmi/rest/api/auth/:solution',
			'create' 	: 'fmi/rest/api/record/:solution/:layout',
			'delete' 	: 'fmi/rest/api/record/:solution/:layout/:recordId',
			'edit' 		: 'fmi/rest/api/record/:solution/:layout/:recordId',
			'get' 		: 'fmi/rest/api/record/:solution/:layout/:recordId',
			'getAll' 	: 'fmi/rest/api/record/:solution/:layout',
		};

		var json_auth = {
			'json' : {
				user:"nuevo",
				password:"1234",
				layout:"prueba"
			}
		};
		*/
		/*
		var headers = new Headers();
    		headers.append("Accept", 'application/json');
    		headers.append('Content-Type', 'application/json');
    		headers.append('Access-Control-Allow-Origin', 'https://201.238.235.30/');
    		//headers.append('Access-Control-Allow-Origin', '*');
    		headers.append('Access-Control-Allow-Methods', 'OPTIONS, GET, HEAD, POST, DELETE');
			headers.append('Access-Control-Allow-Credentials', 'true');
    	/*
		var headers = new Headers({
			'Access-Control-Allow-Origin': 'https://201.238.235.30/',
			'Access-Control-Allow-Credentials': 'true',
			'Access-Control-Allow-Methods': 'OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type, Accept',
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		});
		*/
		/*
		var options = new RequestOptions({ headers: headers });
		
		this.http.post(base_uri + uri_stuff.login.replace(':solution', service_data.solution) , json_auth, options)
			.map(response => response.json())
			.subscribe( response => console.log(response), () => console.log('Authentication Complete') );

			*/



		/*
		//Opcion 3 - POST
		var link = 'https://201.238.235.30/fmi/rest/api/auth/Tasks_FMAngular';
		/*
		let headers = new Headers({
			//'Access-Control-Allow-Origin': 'https://201.238.235.30',
			//'Access-Control-Allow-Credentials': 'true',
			//'Access-Control-Allow-Methods': 'GET, POST, PUT',
			//'Access-Control-Allow-Headers': 'Content-Type',
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		});
		

		var headers = new Headers();
    	headers.append("Accept", 'application/json');
    	headers.append('Content-Type', 'application/json');

		let options = new RequestOptions({ headers: headers });
		
		var myData = {
			'json' : {
				user:"nuevo",
				password:"1234",
				layout:"prueba"
			}
		};
		 
		this.http.post(link, myData, options)
			.map(response => response.json())
			.subscribe(
		  		response => console.log(response),
		  		() => console.log('Authentication Complete')
			);

		*/
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