import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../interfaces/patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  @Input() patient: Patient;

  constructor() { }

  ngOnInit() {
  }

}
