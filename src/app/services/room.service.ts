import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http:HttpClient) { }
  getRoom(){
    return this.http.get<any>("https://localhost:44389/api/Rooms")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
