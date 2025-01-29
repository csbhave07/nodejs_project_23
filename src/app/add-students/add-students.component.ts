import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-add-students',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule],
  templateUrl: './add-students.component.html',
  styleUrl: './add-students.component.scss'
})
export class AddStudentsComponent implements OnInit {
  studentForm!: FormGroup;
  fb = inject(FormBuilder)

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      passport: new FormControl('', [Validators.required]),
      fitness: new FormControl('', [Validators.required]),
      course: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      subjects: new FormControl('', [Validators.required]),
    })
  }


  onFormSubmit(): void{
    // id: number,

    console.log(this.studentForm)
  }

}
