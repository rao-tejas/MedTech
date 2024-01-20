
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorListComponent } from './Doctor/doctor-list/doctor-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DoctorListComponent,
    DoctorHomeComponent,
    SignUpComponent,
    PatientHomeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    MatGridListModule,
    FormsModule,
    MatButtonToggleModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
