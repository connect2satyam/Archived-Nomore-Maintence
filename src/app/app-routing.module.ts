import { ResizeComponent } from './components/resize/resize.component';
import { RegistrationComponent } from './core/registration/registration.component';
import { WelcomeComponent } from './core/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventBookingComponent } from './components/event-booking/event-booking.component';
import { EventListingComponent } from './components/event-listing/event-listing.component';
import { LoginComponent } from './core/login/login.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'resize', component: ResizeComponent },
  { path: 'event-listing', component: EventListingComponent },
  { path: 'event-booking', component: EventBookingComponent },
  { path: 'concepts', loadChildren: () => import('./concepts/concepts.module').then(m => m.ConceptsModule) },
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
