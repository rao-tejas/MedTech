import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }
  LoginPatient(form:any){
    var loginurl="http://localhost:8080/api/patient/login";
    return this.http.post(loginurl, form);
  }

  RegisterPatient(form:any){
    return this.http.post("http://localhost:8080/api/patient/register",form)
  }
}
