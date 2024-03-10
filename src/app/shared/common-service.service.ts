import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  constructor(private http: HttpClient) {}

  downloadFile(url: string): Observable<ArrayBuffer> {
    return this.http.get(url, { responseType: 'arraybuffer' });

  }
  getApi(url: string){
    return this.http.get(url);
  }
  postApi(url:string,obj:object){
    return this.http.post(url,obj);
  }
}
