import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare const google: any;
// import { } from '@types/googlemaps';

@Component({
  selector: 'app-app-contact',
  templateUrl: './app-contact.component.html',
  styleUrls: ['./app-contact.component.css']
})
export class AppContactComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  myForm: FormGroup;
  name: string;
  email: string;
  message: string;

  ngOnInit() {
    this.myForm = this.fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'message': ['']
    });
    this.myForm.valueChanges.subscribe(console.log);
  }

  addForm(data: any) {
    console.log(data);
  }

}
