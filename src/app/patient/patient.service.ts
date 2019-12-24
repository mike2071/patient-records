import { Injectable, OnInit } from '@angular/core';
import { Patient } from '../interfaces/patient';
import { Observable } from 'rxjs';
import { patientsMockData } from '../data/patientsMockData';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients: Observable<Array<Patient>>;

  constructor() { }

  getPatients(){
    return Observable.create((observer) => {
      observer.next(patientsMockData);
      observer.complete(console.log('Patient data loaded...'));
    })
  }
}
