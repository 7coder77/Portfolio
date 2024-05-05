import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '@app/shared/common-service.service';

@Component({
  selector: 'app-dynamic-data',
  templateUrl: './dynamic-data.component.html',
  styleUrls: ['./dynamic-data.component.css']
})
export class DynamicDataComponent implements OnInit {

  constructor(
    private comon:CommonServiceService
  ) { }

  item:any=[];
  ngOnInit(): void {
    this.comon.getApi('https://fastapi-app-hf22.onrender.com/GetAdminData').subscribe(
      (res)=>{
        console.log(res);
        this.item=res;
      }
    )
  }

}
