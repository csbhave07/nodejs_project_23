import { createReducer, on } from "@ngrx/store";
import { initialState } from "./student.state";
import * as Actions from './student.action'

export const studentReducer = createReducer(initialState,
    on(Actions.callStudentApiSuccess,
        (state: any, { payload }: any) => ({
            ...state,
            studentRecords: payload
        })
    )
)