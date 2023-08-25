import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private baseUrl = 'http://localhost:3000/user'; // Replace with your actual API base URL

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}`, user);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${userId}`);
  }
}
