import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`)
  }

  getUser(id:number) {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  deleteUser(user: User) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
  }

  updateUser(user: User) {
    return this.http.put(
      `https://jsonplaceholder.typicode.com/user/${user.id}`,
      user
    );
  }
}
