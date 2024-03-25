import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonServiceService } from '@app/shared/common-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:any;
  constructor(
    private fb: FormBuilder,
    private commonService:CommonServiceService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.contact=this.fb.group({
      name:null,
      email:null,
      msg:null
    })
  }
  submit(){
    console.warn(this.contact.value)
    this.commonService.postApi('https://fastapi-app-hf22.onrender.com/contact',this.contact.value).subscribe((res)=>{
      this._snackBar.open("ThankYou for getting in touch! 😊", 'Cool');
    })
  }

}
