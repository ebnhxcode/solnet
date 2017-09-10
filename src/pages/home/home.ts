import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { twitt } from '../../commons/twitt';
import { Fav } from '../../components/fav/fav';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	listado:Array<twitt> = [
		{img:'https://pbs.twimg.com/media/CrCb2wUWcAAO6xI.jpg', nick_name:'@nunoa', text:'Tarjeta ñuñoa'},
      	{img:'https://i.ytimg.com/vi/tlf5gWzxi_k/maxresdefault.jpg', nick_name:'@providencia', text:'Tarjeta Providencia'},
     	{img:'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAI1AAAAJDFlYTExMjA4LTc5YTYtNGY1Ny05ZTg1LTAwMjgyYmRmNTIyYQ.png', nick_name:'@solnet', text:'Vecino conectado'}
    ];
	

  constructor(public navCtrl: NavController) {

  }

  onFav(response:string){
    console.log(response);
  }

}

