import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingdetailsService {
  
  public bookingDetailsList:any=[]
  public roomDetailsList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getRoomDetails(){
    return this.roomDetailsList.asObservable();
  }
  setRoomDetails(room:any){
    this.bookingDetailsList.push(...room);
    this.roomDetailsList.next(room);
  }
  addtoBookings(room:any){
    this.bookingDetailsList.push(room);
    this.roomDetailsList.next(this.bookingDetailsList);
    console.log(this.bookingDetailsList);
  }
 
  removeBookingDetails(room:any){
    this.bookingDetailsList.map((a:any,index:any)=>{
    if(room.num===a.num){
      this.bookingDetailsList.splice(index,1)
    }
    })
  }
  removeAllBooking(){
    this.bookingDetailsList=[];
    this.roomDetailsList.next(this.bookingDetailsList);
  }
}
