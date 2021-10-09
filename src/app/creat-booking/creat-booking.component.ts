import { Component, OnInit } from '@angular/core';
import { booking } from '../booking';
import { bookings } from '../mock-bookings';
import { Router } from '@angular/router';



@Component({
  selector: 'app-creat-booking',
  templateUrl: './creat-booking.component.html',
  styleUrls: ['./creat-booking.component.scss']
})
export class CreatBookingComponent implements OnInit {

  constructor(private router: Router) { }

  booking: booking = {

    id: 100,
    name: "Your Name",
    roomnumber: 201,
    startDate: new Date(),
    endDate: new Date()

  }
  
  ngOnInit(): void {
  }

  save(): void {

    bookings.push(this.booking);
    this.router.navigate(['bookings']);

  }

}
