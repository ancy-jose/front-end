import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { RoomComponent } from './room/room.component';
import { BookingComponent } from './booking/booking.component';
import { GuestComponent } from './guest/guest.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SortPipe } from './shared/sort.pipe';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    RoomComponent,
    BookingComponent,
    GuestComponent,
    HomeComponent,
    FilterPipe,
    SortPipe,
    LoginComponent,
    SignupComponent,
    RatingComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
