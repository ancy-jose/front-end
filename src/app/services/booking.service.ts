import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }
  getBooking(){
    return this.http.get<any>("https://localhost:44389/api/Bookings")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
