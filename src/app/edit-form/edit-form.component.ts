import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  user: any = {}; // Initialize an empty user object

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // Retrieve user data from query parameters
      this.user = params;
    });
  }

  saveChanges(): void {
    // Implement save changes functionality here
    // You can update the user data in your data source (e.g., API, service)
    // After saving, navigate back to the previous page
  }
}
