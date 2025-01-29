import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { IStudentRecords } from "./student.modal";

export interface StudentsState extends EntityState<IStudentRecords> { };

export const adapter: EntityAdapter<IStudentRecords> = createEntityAdapter<IStudentRecords>();

export const initialState: StudentsState = adapter.getInitialState();