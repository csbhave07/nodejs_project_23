import { createSelector } from '@ngrx/store';

import { IStudentRecords } from './student.modal';

export interface AppState {
    students: IStudentRecords[]
}

export const selectFeature = (state: AppState) => state.students;

export const selectAll = createSelector(selectFeature, (state: IStudentRecords[]) => state);