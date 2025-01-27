import { createSelector } from '@ngrx/store';

import { IStudentRecords } from './student.modal';

export interface AppState {
    studentRecords: IStudentRecords[]
}

export const selectFeature = (state: AppState) => state.studentRecords;

export const selectAll = createSelector(selectFeature, (state: IStudentRecords[]) => state);