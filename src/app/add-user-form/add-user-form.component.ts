import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  user:any = {}
  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(): void {
    //UPDATE api call here
  }

}
