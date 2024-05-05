import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/shared/auth.service';
import { CommonServiceService } from '@app/shared/common-service.service';

@Component({
  selector: 'app-post-login-main',
  templateUrl: './post-login-main.component.html',
  styleUrls: ['./post-login-main.component.css']
})
export class PostLoginMainComponent implements OnInit {
  noti=0;

  constructor(
    private auth:AuthService,
    private router:Router,
    private commonService: CommonServiceService
  ) { }

  ngOnInit(): void {
    this.commonService.getApi('https://fastapi-app-hf22.onrender.com/contact-count').subscribe((res:any)=>{
      this.noti=res?.count;
    })
  }
  logout(){
    this.auth.logout();
    this.router.navigate(['/admin']);
  }

}
