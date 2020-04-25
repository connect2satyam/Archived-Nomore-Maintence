import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventBookingComponent } from './components/event-booking/event-booking.component';
import { EventListingComponent } from './components/event-listing/event-listing.component';


const routes: Routes = [
  { path: '', component: EventListingComponent },
  { path: 'event-listing', component: EventListingComponent },
  { path: 'event-booking', component: EventBookingComponent },
  { path: '**', component: EventListingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
