import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterModule, MatCardModule, ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  authService = inject(AuthService);
  router = inject(Router);


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    console.log(this.loginForm)
    if (this.loginForm.invalid) {
      return
    }
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        const redirectUrl = '/dashboard';
        this.router.navigate([redirectUrl]);
      }
    })
  }

}
