import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.scss']
})
export class DoctorHomeComponent {
doc:any=null;
constructor(private route: ActivatedRoute){
  const doctorString = this.route.snapshot.paramMap.get('doctor');
  if(doctorString){
    this.doc=JSON.parse(doctorString);
  }
  console.log(this.doc);
}
}
