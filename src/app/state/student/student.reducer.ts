import { createReducer } from "@ngrx/store";
import { initialState } from "./student.state";


export const studentReducer = createReducer(initialState)