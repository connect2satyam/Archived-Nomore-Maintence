import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { JsonServerService } from 'src/app/shared/json-server.service';
import { EventModel } from 'src/app/shared/event.model';
import { Router } from '@angular/router';

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

  constructor(private jsonServerService: JsonServerService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.formGroup.get('eventName').valueChanges.subscribe((inputText: string) => {
      this.jsonServerService.eventSearch(inputText);
    });

    this.getEvents$ = this.jsonServerService.getEventsFilterByEventName$;
  }

  selectedEvent(selectedEvent: EventModel) {
    this.jsonServerService.selectedEvent(selectedEvent);
    this.router.navigate(['event-booking']);
  }

}
