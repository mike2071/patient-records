import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../interfaces/patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {

  @Input() patients: Observable<Array<Patient>>;
}
