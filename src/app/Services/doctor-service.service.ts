import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';
import { Form } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {
  url="http://localhost:8080/api/Doctor/";
 
  constructor(private http: HttpClient) {
    
   }

  getData() {
    return this.http.get(this.url+"all");
  }

  getDocBySpeciality(speciality:String) {
    return this.http.get(this.url+speciality);
  }
  
  LoginDoctor(form:Form){
    var loginurl="http://localhost:8080/api/Doctor/login";
    return this.http.post(loginurl, form);
  }

}
