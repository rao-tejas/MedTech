import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorServiceService } from '../Services/doctor-service.service';
import { Router } from '@angular/router';
import { PatientService } from '../Services/patient-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  selectedRole = "Patient";
  // email: string;
  // password: string;
  loginForm: FormGroup;
  showPasswordWarning = false;

  constructor(private fb: FormBuilder, private docService: DoctorServiceService,private patientService:PatientService,private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
     
        if (this.selectedRole == "Patient") {
          this.patientService.LoginPatient(this.loginForm.value).subscribe(
            (response)=>{
              console.log('Loging in:',response);
              this.router.navigate(['/patientHome']);
            },
            (error)=>{
              console.log('Login Failed:',error)
              this.showPasswordWarning=true;
            }
          )

        } else {
        this.docService.LoginDoctor(this.loginForm.value).subscribe(
          (response) => {
            // Handle the response from the server here (e.g., redirect or display a message)
            console.log('Logged in:', response);
            this.router.navigate(['docHome', { doctor: JSON.stringify(response) }]); 
          },
          (error) => {
            // Handle any errors here (e.g., display an error message)
            console.error('Login failed:', error);
            this.showPasswordWarning = true;
          }
        );
        }
      //}
    }

  }
}
