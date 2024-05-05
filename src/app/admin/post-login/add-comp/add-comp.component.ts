import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonServiceService } from '@app/shared/common-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html',
  styleUrls: ['./add-comp.component.css']
})
export class AddCompComponent implements OnInit {

  constructor(
    private fb :FormBuilder,
    private commonService:CommonServiceService,
    private _snackBar: MatSnackBar,
  ) { }
  addData:any;

  ngOnInit(): void {
    this.addData=this.fb.group({
      title:null,
      link:null,
      summary:null
    })
  }
  onSubmit(){
    console.log(this.addData)
    this.commonService.postApi('https://fastapi-app-hf22.onrender.com/components',this.addData.value).subscribe((res)=>{
      this._snackBar.open("DATA added", 'close');
    },(err)=>{
      this._snackBar.open(err, 'close');
    })
  }

}
