import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any = [];
  constructor(private router: Router, private dataService: UserDataService) { }

  ngOnInit(): void {
    // GET users API call
    this.users = this.dataService.users;
  }

  editUser(user: any){
    this.router.navigate(['/edit'], { queryParams: user });
  }

  deleteUser(user: any) {
    //DELETE user API call
    let index = this.users.findIndex((data:any) => data.id === user.id);
    this.users.splice(index,1);
  }

}
