import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { EventBookingComponent } from './components/event-booking/event-booking.component';
import { EventListingComponent } from './components/event-listing/event-listing.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from './core/core.module';
import { TelasRoutingModule } from './telas/telas-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    EventListingComponent,
    EventBookingComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CoreModule,
    TelasRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
