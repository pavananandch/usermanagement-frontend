import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../data.service';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  user: any = {}; // Initialize an empty user object

  constructor(private router: Router, private dataService: UserDataService) {}

  ngOnInit(): void {
  }

  saveChanges(): void {
    // Implement save changes functionality here
    // You can update the user data in your data source (e.g., API, service)
    // After saving, navigate back to the previous page
    this.dataService.createUser(this.user).subscribe((res) => {
      console.log({res});
      alert("User created succesfully")
      this.router.navigate(['/']);
    });
  }
}

