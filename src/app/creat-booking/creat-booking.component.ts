import { Component, OnInit } from '@angular/core';
import { booking } from '../booking';
import { bookings } from '../mock-bookings';



@Component({
  selector: 'app-creat-booking',
  templateUrl: './creat-booking.component.html',
  styleUrls: ['./creat-booking.component.scss']
})
export class CreatBookingComponent implements OnInit {

  constructor() { }

  booking: booking = {

    id: 100,
    name: "your name",
    roomnumber: 100,
    startDate: new Date(),
    endDate: new Date()

  }
  
  ngOnInit(): void {
  }

}
