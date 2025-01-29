import { Component, computed, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IStudentRecords } from '../state/student/student.modal';
import { Observable } from 'rxjs';
import { AppState, selectAllStudents, selectStudentById } from '../state/student/students.selectors';
import { Store } from '@ngrx/store';
import * as Actions from '../state/student/student.action';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-student-table',
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.scss'
})
export class StudentTableComponent implements OnInit {

  searchControl: FormControl = new FormControl();
  store = inject(Store<AppState>)
  dataSource: any = [];
  displayedColumns: string[] = ['id','name', 'city', 'country', 'subject', 'PassportDeclaration', 'FitnessDeclaration', 'phone', 'email', 'street', 'postalCode'];
  dataSource$: Observable<IStudentRecords[]> = this.store.select(selectAllStudents);

  constructor() {
    this.store.dispatch(Actions.callStudentRecordsApi())
  }

  ngOnInit(): void {
    this.dataSource$.subscribe((res: any) => {
      this.dataSource = res;
    })

    this.searchControl.valueChanges.subscribe((id: number) => {
      if (id) {
        this.store.select((state) => selectStudentById(state)({ studentId: id })).subscribe(data => {
          this.dataSource = [data];
        })
      } else {
        this.store.select((state) => selectAllStudents(state)).subscribe(data => {
          this.dataSource = data
        })

      }
    })
  }

}
