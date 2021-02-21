import { Component, OnInit } from '@angular/core';
import { Register} from './register';
import { LoginService } from '../login/login.service';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register=new Register();
  constructor(private service:LoginService,private route:Router) { }

  ngOnInit(): void {
  }
   
  validateUser(){
    this.service.registerUser(this.register).subscribe(data=>{
     this.route.navigate(['/login'])
    });
  }
  
}
