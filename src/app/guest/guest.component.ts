import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';
import { BookingdetailsService } from '../services/bookingdetails.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { GuestService } from '../services/room.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
 export class GuestComponent implements OnInit {
  public room:any=[];
  currentRate=0;
  constructor(private bookingDetailsService:BookingdetailsService,private actRoute: ActivatedRoute){


//   this.booking_id = this.actRoute.snapshot.params['id'];
 }

 ngOnInit(): void {
//   this.room.getRoom().subscribe(res=>{
//     this.roomList =res;
this.bookingDetailsService.getRoomDetails()
.subscribe(res=>{
  this.room=res;
})
}
removeBooking(rooms:any){
  this.bookingDetailsService.removeBookingDetails(rooms);
}
emptyBookings(){
  this.bookingDetailsService.removeAllBooking();
}
 }
