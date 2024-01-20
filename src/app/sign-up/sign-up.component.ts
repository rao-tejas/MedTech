import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../Services/patient-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  registrationForm : FormGroup ;
  uniquemail=false;

  constructor(private fb: FormBuilder,private router: Router,private patientService:PatientService) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
     password: ['',[Validators.required,Validators.minLength(5)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
   
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form submitted with the following data:', this.registrationForm.value);
      this.patientService.RegisterPatient(this.registrationForm.value).subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/login']);
        },err=>{
          console.log(err);
          this.uniquemail=true;
        }
      )
      
    }
  }

}
