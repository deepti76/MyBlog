import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  pageTitle = 'mCart';
    loginTitle = 'Login';
    userName: string;
    constructor(private _router: Router) { }

    ngOnInit(): void {
        this.userName = sessionStorage.getItem('username');
    }

    login() {
        const value = document.getElementById('login').innerHTML;

        if (value === 'Login') {
            this._router.navigate(['/login']);
            history.forward();

        } else if (value === 'Logout') {
            sessionStorage.clear();
            document.getElementById('login').innerHTML = 'Login';
            document.getElementById('welcome').style.display = 'none';
            this._router.navigate(['/welcome']);
        }
    }

}
