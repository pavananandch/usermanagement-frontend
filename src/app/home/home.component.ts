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

  users:any = [];

  ngOnInit(): void {
    this.dataService.getAllUsers().subscribe({
      next: (res) => {
        this.users = res.response;
        console.log(this.users);

      },
      error: (error) => {
        console.log({error});

      }
    })
  }

  editUser(user: any){
    this.router.navigate(['/edit'], { queryParams: user });
  }

  deleteUser(user: any) {

  }

}
