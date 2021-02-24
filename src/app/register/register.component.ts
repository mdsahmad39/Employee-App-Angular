import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  countriesList: any;

  constructor(public empService: EmpService) {

  }

  ngOnInit(): void {
    this.empService.getAllCountries().subscribe((data: any) => { this.countriesList = data; });
  }

  submitRegisterForm(registerForm: any): void {
    console.log(registerForm.value);
  }

}
