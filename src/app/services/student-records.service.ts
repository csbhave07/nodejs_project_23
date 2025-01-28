import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IStudentRecords } from '../state/student/student.modal';

@Injectable({
  providedIn: 'root'
})
export class StudentRecordsService {

  http = inject(HttpClient)
  constructor() { }

  getStudentRecords() {
    const baseUrl = 'http://localhost:3000/api';
    return this.http.get<Array<IStudentRecords>>(`${baseUrl}/studentRecords`);
  }
}
