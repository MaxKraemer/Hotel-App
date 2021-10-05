import { Component, OnInit } from '@angular/core';
import { booking } from '../booking';
import { bookings } from '../mock-bookings';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  constructor() { }

  bookings = bookings;

  ngOnInit(): void {
  }

}
