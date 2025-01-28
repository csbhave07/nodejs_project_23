import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { actionList } from "./student.action";
import { catchError, exhaustMap, map } from "rxjs/operators";
import { EMPTY } from "rxjs";
import { StudentRecordsService } from "../../services/student-records.service";


@Injectable()

export class StudentEffects {

    actions$ = inject(Actions);
    studentRecordsService = inject(StudentRecordsService);

    loadStudentRecords$ = createEffect(() => this.actions$.pipe(
        ofType(actionList.callStudentRecordsApi),
        exhaustMap(() => this.studentRecordsService.getStudentRecords().pipe(
            map(studentRecords => ({ type: actionList.callStudentApiSuccess, payload: studentRecords })),
            catchError(() => EMPTY)
        ))
    ))
}