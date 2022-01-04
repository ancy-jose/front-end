import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getHotel(){
    return this.http.get<any>("https://localhost:44389/api/Hotels")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
