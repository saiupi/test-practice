import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private myRoute: Router) { }

  ngOnInit() {
  }
  
}
