import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  age: number;
  name: string;
  salary: number;
  address: any;
  hobbies: any;

  constructor() {
    this.age = 33;
    this.name = "Ajay";
    this.salary = 23423423;
    this.address = { doorNo: "22 - 33 - 33", street: "staright" };
    this.hobbies = ["Cricket", "Badminton", "Playing"];
  }

  ngOnInit(): void {
  }

}
