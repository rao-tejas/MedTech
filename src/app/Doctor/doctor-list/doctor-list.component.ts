import { Component, OnInit } from '@angular/core';
import { DoctorServiceService } from 'src/app/Services/doctor-service.service';

interface Doctor {
  specialty: string; // Adjust the property type according to your data structure
  // Add other properties as needed
}

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit{
  doctors: any;

  constructor(private docService: DoctorServiceService) { }

  ngOnInit(): void {
    this.docService.getData().subscribe((response) => {
      this.doctors = response;
     // console.log(this.doctors);
    });
  }

  selectedSpecialty = 'All'; // Default value

  // Function to filter doctors by specialty
  filterDoctors() {
    if (this.selectedSpecialty === 'All') {
      this.docService.getData().subscribe((response) => {
        this.doctors = response;});
    } else {
     this.docService.getDocBySpeciality(this.selectedSpecialty).subscribe((response) => {
      this.doctors = response;});
      //this.doctors = this.doctors.filter((fdoctor: Doctor) => fdoctor.specialty === this.selectedSpecialty);
    }
  }
}
