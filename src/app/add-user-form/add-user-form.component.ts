import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  user:any = {}
  constructor(private dataService: UserDataService, private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(): void {
    //POST api call here
    this.dataService.users.push(this.user);
    this.router.navigate(['/'])
  }

}
