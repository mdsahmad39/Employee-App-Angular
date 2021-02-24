import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeesList: any;

  message: any;

  constructor(public empService: EmpService) {
    this.message = '';
  }

  ngOnInit(): void {
    this.empService.getAllEmployees().subscribe((data: any) => { this.employeesList = data; });
  }

  showMessage(): void {
    alert(this.message);
  }

}


// this.employees = [{ id: 1, name: "Ajay", gender: "male", doj: "12-2-00", salary: 454545, loginId: "ajay123", password: "password" },
    // { id: 2, name: "Navjyoth", gender: "male", doj: "2-12-99", salary: 23234, loginId: "navjyoth123", password: "password" },
    // { id: 3, name: "Sushma", gender: "female", doj: "1-8-98", salary: 6789, loginId: "sushma123", password: "password" },
    // { id: 4, name: "Rahul", gender: "male", doj: "7-8-80", salary: 34343, loginId: "rahul123", password: "password" },
    // { id: 5, name: "Chanduu", gender: "male", doj: "4-28-67", salary: 456756, loginId: "chandu123", password: "password" },
    // { id: 6, name: "Abbas", gender: "male", doj: new Date(), salary: 567567, loginId: "abbas123", password: "password" }];