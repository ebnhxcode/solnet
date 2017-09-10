import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Profile } from '../../commons/profile';
import { twitt } from '../../commons/twitt';



@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

	
	
	me:Profile = {
    "img":'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAI1AAAAJDFlYTExMjA4LTc5YTYtNGY1Ny05ZTg1LTAwMjgyYmRmNTIyYQ.png',
     nick_name:'@solnet',
    "interactions":1,
    "github": "solnet github",
    "twitter": "solnet twitter",
    "facebook": "solnet facebook",
    "bio": "Proveedor de Hosting - Desarrollo Base de Datos en Web - Sistemas tecnológicos y software municipal - Gestión de Proyectos y Concesiones Municipales Privadas Gestión Financiera Municipal - Gestión de Calidad Municipal - Asesoría profesional especializada - Capacitación Municipal y Tecnológica"
  };

  listado:Array<twitt> = [
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'},
      {img:'https://pbs.twimg.com/profile_images/807699331633598464/A_9pIQ6d.jpg', nick_name:'@jorgeucano', text:'test 1234'}
    ];


  constructor(public navCtrl: NavController) {
    this.me.interactions = this.listado.length;
  }

}

