import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { BookingdetailsService } from '../services/bookingdetails.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  location='';
  SortbyParam='';
  sortDirection ='asc';
  public hotelList: any;
  searchKey:string="";
  image:string="appbooking.jpg";
  public searchTerm !: string;
  constructor(private api: ApiService,private bookingdetailsservice:BookingdetailsService){}
  search(event:any)
  {
   this.searchTerm = (event.target as HTMLInputElement).value;
   console.log(this.searchTerm);
   this.bookingdetailsservice.search.next(this.searchTerm);
  }
  ngOnInit(): void {
    
    this.api.getHotel().subscribe(res=>{
      this.hotelList =res;
    })
    this.bookingdetailsservice.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
  }
 onSortDirection(){
   if(this.sortDirection==='desc'){
     this.sortDirection ='asc';
   }else{
     this.sortDirection ='desc';
   }
 }
}
