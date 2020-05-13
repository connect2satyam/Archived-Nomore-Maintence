import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { JsonServerService } from 'src/app/shared/json-server.service';
import { EventModel } from 'src/app/shared/event.model';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'satyas-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.scss']
})
export class EventListingComponent implements OnInit {

  getEvents$: Observable<EventModel[]>;
  formGroup = this.fb.group({
    eventName: ['']
  });
  private socialUser$: Observable<SocialUser>;
  private loggedIn: boolean;

  constructor(
    private jsonServerService: JsonServerService,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.formGroup.get('eventName').valueChanges.subscribe((inputText: string) => {
      this.jsonServerService.eventSearch(inputText);
    });
    this.jsonServerService.eventSearch(null);
    this.getEvents$ = this.jsonServerService.getEventsFilterByEventName$;

    this.socialUser$ = this.authService.socialUser$;

  }

  selectedEvent(selectedEvent: EventModel) {
    this.jsonServerService.selectedEvent(selectedEvent);
    this.router.navigate(['event-booking']);
  }

}
