import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';
import { BookingService } from '../services/booking.service';
import { BookingdetailsService } from '../services/bookingdetails.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  alert:boolean=false;
  Room_num: number;
  public BookingList: any;
  Today:any;
  constructor(private booking: BookingService,private bookingDetailsServices:BookingdetailsService,private actRoute: ActivatedRoute){
    this.Room_num = this.actRoute.snapshot.params['num'];
  }
 
  ngOnInit(): void {
    this.booking.getBooking().subscribe(res=>{
      this.BookingList =res;
    })
  } 
  addtoBookings(room: any){
    this.alert=true;
  this.bookingDetailsServices.addtoBookings(room);
  }
  closeAlert(){
    this.alert=false;
  }
}

