import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: false,
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar implements OnInit {
  constructor(
    public userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {}
  logout() {
    this.userService.user = undefined;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
