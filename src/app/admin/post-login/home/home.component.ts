import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '@app/shared/common-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  row:any;
  constructor(
    private commonservice: CommonServiceService
  ) { }

  displayedColumns: string[] = ['select', 'id', 'title', 'summary']; // Add 'select' column
  dataSource: any;

  ngOnInit(): void {
    // Fetch data from the API
    this.commonservice.getApi('https://fastapi-app-hf22.onrender.com/GetAdminData').subscribe((res) => {
      this.dataSource = res;
    });
  }

  // Method to handle checkbox selection
  toggleSelection(row: any) {
    this.row=row
    // Implement your logic here to handle checkbox selection
    console.log('Checkbox selected:', row);
  }
  deleteRow(){
    this.commonservice.deleteApi('https://fastapi-app-hf22.onrender.com/Del_Componet/'+this.row?.id).subscribe((res=>{
      this.ngOnInit();
    }))
  }
}
