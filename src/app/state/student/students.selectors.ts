import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IStudentRecords } from './student.modal';
import { adapter, StudentsState } from './student.state';

export const selectStudentState = createFeatureSelector<StudentsState>('students');

export interface AppState {
  students: IStudentRecords[]
}


const { selectAll, selectEntities } = adapter.getSelectors();

export const selectStudentsEntities = createSelector(selectStudentState, selectEntities);


export const selectStudentById = createSelector(
  selectStudentsEntities, // state selector
  (state: any) => (props: { studentId: number }) =>
    state[props.studentId] || null // Returns the student or null if not found
);


export const selectFeature = (state: AppState) => state?.students;

export const selectAllStudents = createSelector(
  selectStudentState,
  selectAll
);