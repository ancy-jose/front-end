import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  hotel_id: string;
  public roomList: any;
  constructor(private room: RoomService,private actRoute: ActivatedRoute){
    this.hotel_id = this.actRoute.snapshot.params['id'];
  }
 
  ngOnInit(): void {
    this.room.getRoom().subscribe(res=>{
      this.roomList =res;
    })
  }
  

  
  
}

