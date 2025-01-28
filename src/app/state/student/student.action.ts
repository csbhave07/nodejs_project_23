import { createAction, props } from "@ngrx/store"
import { IStudentRecords } from "./student.modal";


export const actionList = {
    callStudentRecordsApi: "[ Students Table Component ] call students api",
    callStudentApiSuccess: "[ Students Table Component ] call students api Success"
}

export const callStudentRecordsApi = createAction(actionList.callStudentRecordsApi);
export const callStudentApiSuccess = createAction(actionList.callStudentApiSuccess, props<{ payload: IStudentRecords[] }>());