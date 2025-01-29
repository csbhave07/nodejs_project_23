import { createReducer, on } from "@ngrx/store";
import { initialState } from "./student.state";
import * as Actions from './student.action'
import { adapter } from "./student.state";


export const studentReducer = createReducer(initialState,
    on(Actions.callStudentApiSuccess,
        (state: any, { payload }: any) => {
            return adapter.addMany(payload, state)
        }
    )
)