import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';
  name = "";
  address = "";
  gender = "";
  age = "";
  dob = "";
  income = "";
  message = "";
  display = 1;
  action = () =>{
    this.display = 2;
  }  
}
