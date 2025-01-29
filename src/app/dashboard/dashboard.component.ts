import { Component } from '@angular/core';
import { StudentTableComponent } from "../student-table/student-table.component";
import { MatTabsModule } from '@angular/material/tabs';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { AddStudentsComponent } from '../add-students/add-students.component';

@Component({
  selector: 'app-dashboard',
  imports: [StudentTableComponent, ContactUsComponent, AddStudentsComponent, MatTabsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
