import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private dataService: UserDataService) { }

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

  ngOnInit(): void {
    // GET users API call
  }

  editUser(user: any){
    this.router.navigate(['/edit'], { queryParams: user });
  }

  deleteUser(user: any) {
    //DELETE user API call
    let index = this.users.findIndex(data => data.id === user.id);
    this.users.splice(index,1);
  }

}
