import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoctorListComponent } from './Doctor/doctor-list/doctor-list.component';
import { LoginComponent } from './login/login.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'docList',component:DoctorListComponent},
  {path:'login',component:LoginComponent},
  {path:'docHome',component:DoctorHomeComponent},
  {path:'signup',component:SignUpComponent},
  {path:'patientHome',component:PatientHomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
