import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friendId: any;
  friend: User;
  friends: User[];

  constructor() {
    // this.friendId = this.activatedRoute.snapshot.params['uid'];
    console.log(this.friendId);
    let usuario1: User = {
      nick : 'Brenda',
      subnick : 'Hola me llamo Brenda',
      age : 28,
      email: 'brenda@gmail.com',
      friend: false,
      uid: 1,
      status: 'online'
    };
    let usuario2: User = {
      nick : 'Arnold',
      subnick : 'Hola me llamo Arnold',
      age : 23,
      email: 'arnold@gmail.com',
      friend: true,
      uid: 2,
      status: 'busy'
    };
    let usuario3: User = {
      nick : 'Amanda',
      subnick : 'Hola me llamo Amanda',
      age : 26,
      email: 'amanda@gmail.com',
      friend: true,
      uid: 3,
      status: 'online'
    };
    let usuario4: User = {
      nick : 'Gilberto',
      subnick : 'Hola soy Gilberto',
      age : 15,
      email: 'gilberto@gmail.com',
      friend: true,
      uid: 4,
      status: 'away'
    };
    let usuario5: User = {
      nick : 'Marcos',
      subnick : 'Hola soy Marcos',
      age : 30,
      email: 'Marcos@gmail.com',
      friend: false,
      uid: 5,
      status: 'offline'
    };
    // let users : User[] = [
    //   myUser
    // ];
    this.friends = [usuario1, usuario2, usuario3, usuario4, usuario5];
    this.friend = this.friends.find((record) => {
      return record.uid === this.friendId;
    });
    console.log(this.friends);
  }
  getFriends() {
    return this.friends;
  }
}
