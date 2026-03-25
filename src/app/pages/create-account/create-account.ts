import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: false,
  templateUrl: './create-account.html',
  styleUrl: './create-account.css',
})
export class CreateAccount {
  createAccountForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.createAccountForm = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // onCreateAccount() {
  //   this.userService
  //     .createNewUser(this.createAccountForm.value)
  //     .then((res) => {
  //       console.log(res);
  //       this.userService.user = res;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  onCreateAccount() {
    this.userService
      .createNewUser(this.createAccountForm.value)
      .then((res) => {
        console.log(res);
        this.userService.user = res;
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigate(['/posts']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
