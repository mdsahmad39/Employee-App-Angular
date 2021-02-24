import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;

  constructor(public router: Router, public empService: EmpService) {
    this.user = { loginId: '', password: '' };
  }

  ngOnInit(): void {
  }

  loginSubmit(): void {
    console.log("login id: " + this.user.loginId);
  }

  submitLoginForm(loginForm: any): void {

    if (loginForm.loginId === 'admin' && loginForm.password === 'admin') {
      this.empService.setUserLoggedIn();
      this.router.navigate(['products']);
    } else {
      alert("wrong credentials");
    }
  }

}
