import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Notifications } from '../../commons/notifications';

import { VerNotificationPage } from './verNotification';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

	notifications:Array<Notifications> = [
      {action: 'reply', img:'https://pbs.twimg.com/media/CrCb2wUWcAAO6xI.jpg', nick_name:'@nunoa', text:'Tarjeta ñuñoa'},
      {action: 'replatzitt', img:'https://i.ytimg.com/vi/tlf5gWzxi_k/maxresdefault.jpg', nick_name:'@providencia', text:'Tarjeta Providencia'},
      {action: 'mention', img:'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAI1AAAAJDFlYTExMjA4LTc5YTYtNGY1Ny05ZTg1LTAwMjgyYmRmNTIyYQ.png', nick_name:'@solnet', text:'Vecino conectado'}
    ];


  constructor(public navCtrl: NavController) {

  }

  verNotification(_notification:Notifications){
  	this.navCtrl.push(VerNotificationPage,{
  		id:_notification
  	});
  }


}

