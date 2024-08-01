import { Injectable } from '@angular/core';
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users : User[] = [
    {username: "etienne", password: "pass"}
  ];

  constructor() { }

  findUser(username : string, password : string) {
    let result : User | null = null;
    this.users.forEach((user : User) => {
      if (user.username === username && user.password === password)
        result = user;
    })
    return result;
  }

  addUser(user : User) {
    this.users.push(user);
  }
}
