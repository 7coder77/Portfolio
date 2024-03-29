import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '@app/shared/common-service.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private commonService: CommonServiceService) {}
  snackbar=false;
  // commonService:any;

  ngOnInit(): void {
    this.commonService.getApi('https://fastapi-app-hf22.onrender.com/').subscribe((data:any) => {
      console.log(data);
    });
  }
  download(){
    const filename = 'resume.pdf';
    this.snackbar=true;
    this.commonService.downloadFile("https://fastapi-app-hf22.onrender.com/downloadfile/CV_latest.pdf").subscribe(
      (data: any) => {
        this.snackbar=false;
        const blob = new Blob([new Uint8Array(data)], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        link.click();
      },
      (error) => {
        console.error('Error downloading file:', error);
      }
    );

  }

}
