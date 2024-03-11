import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/shared/auth.service';

@Component({
  selector: 'app-post-login-main',
  templateUrl: './post-login-main.component.html',
  styleUrls: ['./post-login-main.component.css']
})
export class PostLoginMainComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();
    this.router.navigate(['/admin']);
  }

}
