import { Component, OnInit } from '@angular/core';
import { Reset } from '../reset';
import { LoginService } from '../login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  reset = new Reset();
  constructor(private service: LoginService, private route: Router) { }

  ngOnInit(): void {
  }

  resetPassword() {
    console.log(this.reset);
    if(this.reset.newPassword===this.reset.rePassword){
      this.service.resetPassword(this.reset).subscribe(data=>{
        if(data){
          this.route.navigate(['/login'])
        }
      })
    }
    else{
      document.getElementById('error').innerHTML="Passwords do not match"
    }
  }
}
