import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private snackbar: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // onLogin() {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value);

  //     const { email, password } = this.loginForm.value;

  //     // Call API here
  //   }
  // }
  onLogin() {
    this.userService
      .getUser(this.loginForm.value.email)
      .then((res: any) => {
        console.log(res);
        if (res.length == 0) {
          console.log('account does not exist');
          this.snackbar.open('Account does not exist', 'ok');
        } else {
          if (res[0].password === this.loginForm.value.password) {
            console.log('matched');
            this.snackbar.open('Login successful', 'ok');
            this.userService.user = res[0];
            localStorage.setItem('user', JSON.stringify(res[0]));
            this.router.navigate(['/posts']);
          } else {
            console.log('incorrect password');
            this.snackbar.open('Incorrect password', 'ok');
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
