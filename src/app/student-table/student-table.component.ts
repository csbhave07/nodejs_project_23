import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IStudentRecords } from '../state/student/student.modal';
import { Observable } from 'rxjs';
import { AppState, selectAll } from '../state/student/students.selectors';
import { Store } from '@ngrx/store';
import * as Actions from '../state/student/student.action';


@Component({
  selector: 'app-student-table',
  imports: [MatTableModule],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.scss'
})
export class StudentTableComponent implements OnInit {

  store = inject(Store<AppState>)
  dataSource = [];
  displayedColumns: string[] = ['name', 'city', 'country', 'subject', 'PassportDeclaration', 'FitnessDeclaration', 'phone', 'email', 'street', 'postalCode'];
  dataSource$: Observable<IStudentRecords[]> = this.store.select(selectAll);

  constructor() {
    this.store.dispatch(Actions.callStudentRecordsApi())
  }

  ngOnInit(): void {
    this.dataSource$.subscribe((res: any) => {
      this.dataSource = res?.studentRecords;
    })
  }

}
