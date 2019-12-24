import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../interfaces/patient';
import { PatientService } from './../patient/patient.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  patients: Observable<Array<Patient>> = this.patientService.getPatients();

  constructor(private patientService: PatientService) { }

}
