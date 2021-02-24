import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-empbyid',
  templateUrl: './empbyid.component.html',
  styleUrls: ['./empbyid.component.css']
})
export class EmpbyidComponent implements OnInit {

  empId: any;
  employee: any;
  constructor(public service: EmpService) {
    this.empId = 0;
  }

  ngOnInit(): void {

  }

  getEmpById(): any {
    this.service.getEmployeeById(this.empId).subscribe((data: any) => this.employee = data);
  }

}
