import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private baseUrl = 'http://localhost:3000/user'; // Replace with your actual API base URL
  users = [{
    id: 1,
    name: "Anand",
    email: "anand@gmail.com",
    gender: "Male",
    status: true
  },{
    id: 2,
    name: "pavan",
    email: "pavan@gmail.com",
    gender: "Male",
    status: true
  },{
    id: 3,
    name: "sai",
    email: "sai@gmail.com",
    gender: "Male",
    status: false
  }];
  constructor(private http: HttpClient) {}

}
