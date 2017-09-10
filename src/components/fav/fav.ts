import { Component, Input, EventEmitter,Output } from '@angular/core';

@Component({
	selector:'fav',
	templateUrl:'fav.html'
})

export class Fav{
	@Input() id: number;

	@Output() onFav = new EventEmitter<string>();


	test ="";
	icon = "ios-heart-outline";

	alerta(){
		if (this.test == "") {
			this.test = "primary";
			this.icon = "ios-heart";
			//alert(this.id);
		}
		else{
			this.test = "";
			this.icon="ios-heart-outline";
		}
		this.onFav.emit("selecciono favorito");
	}
}