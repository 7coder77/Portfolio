import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '@app/shared/common-service.service';

@Component({
  selector: 'app-experience-public',
  templateUrl: './experience-public.component.html',
  styleUrls: ['./experience-public.component.css']
})
export class ExperiencePublicComponent implements OnInit {

  constructor(
    private commonService:CommonServiceService
  ) { }
  data:any;
  ngOnInit(): void {
    this.getExperience()
  }
  getExperience(){
    this.commonService.getApi('https://fastapi-app-hf22.onrender.com/get-exp').subscribe((res)=>{
    this.data=res;
    })
  }

}
