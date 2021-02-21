import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Login } from './login'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login();
  constructor(private service: LoginService,private nvt:Router) { }

  ngOnInit(): void {
  }

  validateUser() {
    this.service.validate(this.login).subscribe(data => {
      this.nvt.navigate(['/main']);
    })
  }
}
