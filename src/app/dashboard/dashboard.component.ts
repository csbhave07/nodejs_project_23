import { Component } from '@angular/core';
import { StudentTableComponent } from "../student-table/student-table.component";

@Component({
  selector: 'app-dashboard',
  imports: [StudentTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
