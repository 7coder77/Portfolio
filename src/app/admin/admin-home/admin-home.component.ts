import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }
  logout(){
    this.auth.logout();
    this.router.navigate(['/admin/login']);
  }

  ngOnInit(): void {
  }

}
