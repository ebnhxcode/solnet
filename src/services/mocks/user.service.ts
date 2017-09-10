import { Injectable } from '@angular/core';
import { User } from '../../commons/user';
import { USERS } from './user';

@Injectable()
export class UserService{

  

	getUsers():Promise<User[]>{
		console.log("entramos al promise");
		return Promise.resolve(USERS); //en USER PUEDE ESTA NUESTRA URL
	}	

	loginUser(email,password):Promise<User>{
		let user:User;
		user = this.find(email, password);
		return Promise.resolve(user);

	}

	find(email, password):User{
		let user:User;
		user = USERS.find(x => x.email == email); //es como un foreach 
		if (user !== undefined && user.password == password){
			return user;
		}else{
			return undefined;
		}
	}


}