import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { CreatBookingComponent } from './creat-booking/creat-booking.component';

const routes: Routes = [
  {
    path:'bookings', component:BookingsComponent
  },
  {
    path:'', redirectTo:'bookings', pathMatch:'full'
  },
  {
    path:'creatBooking', component:CreatBookingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
