import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '@app/shared/common-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(
    private commonService:CommonServiceService
  ) { }
  displayedColumns: string[] = ['id','name', 'email', 'msg'];
  dataSource = [];

  ngOnInit(): void {
    this.commonService.getApi('https://fastapi-app-hf22.onrender.com/contact').subscribe((res:any)=>{
      console.warn(res)
      this.dataSource=res;
    })
  }

}
