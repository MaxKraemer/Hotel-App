import { Component, OnInit } from '@angular/core';
import { booking } from '../booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  constructor() { }

  booking : booking = {

    id: 1,
    name: "maximilian kraemer",
    roomnumber: 100,
    startDate: new Date(),
    endDate: new Date("2021-12-31")

  }

  ngOnInit(): void {
  }

}
