import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentTableComponent } from './student-table/student-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudentTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'student-project';
}
