import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventBookingComponent } from './components/event-booking/event-booking.component';
import { EventListingComponent } from './components/event-listing/event-listing.component';
import { CoreModule } from './core/core.module';

import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { environment } from 'src/environments/environment';
import { ResizeComponent } from './components/resize/resize.component';
import { ResizableModule } from 'angular-resizable-element';
import { NgrxComponent } from './concepts/ngrx/ngrx-base/ngrx.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './concepts/ngrx/counter.reducer';
import { MyCounterComponent } from './concepts/ngrx/my-counter.component';

// 640341226215-pop3u1drhhlovipu3v5fcrp0mc69f965.apps.googleusercontent.com   -- local
// 640341226215-7amo9e4l6eutu5qjat23kd6lbajvtrk4.apps.googleusercontent.com   -- firbase
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.googleAPIProviderID)
  }
  // ,{
  //   id: FacebookLoginProvider.PROVIDER_ID,
  //   provider: new FacebookLoginProvider('Facebook-App-Id')
  // }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    EventListingComponent,
    EventBookingComponent,
    ResizeComponent,
    NgrxComponent,
    MyCounterComponent
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
    ToastrModule.forRoot(),
    SocialLoginModule,
    ResizableModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
