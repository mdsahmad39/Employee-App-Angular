import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  public isUserLogged: boolean;

  constructor(public httpClient: HttpClient) {
    this.isUserLogged = false;
  }

  //Login
  public setUserLoggedIn(): void {
    this.isUserLogged = true;
  }

  //Logout
  public setUserLoggedOut(): void {
    this.isUserLogged = false;
  }

  public getUserLoggedStatus(): any {
    return this.isUserLogged;
  }

  public getAllCountries(): any {
    return this.httpClient.get('https://restcountries.eu/rest/v2/all');
  }

  public getAllEmployees(): any {
    return this.httpClient.get('getAllEmployees');
  }

  public getEmployeeById(id: any): any {
    return this.httpClient.get('getEmployeeById/' + id);
  }
}
