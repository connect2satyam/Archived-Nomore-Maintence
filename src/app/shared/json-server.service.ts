import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, of, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventModel } from './event.model';

import * as importData from 'src/db/db.json';

@Injectable({
  providedIn: 'root'
})
export class JsonServerService {
  // URL = 'https://5d1760a48060b10014297b02.mockapi.io/api/v1/';
  constructor(private httClient: HttpClient) {
  }

  eventModel: EventModel = {
    id: 1000,
    eventName: 'Satya demo 1',
    eventDate: '2020-07-12T08:20:05.135Z',
    availableSeats: 0,
    imageUrl: './assets/images/10000.jpg'
  };

  private eventSubject = new BehaviorSubject<string>('');
  eventAction$ = this.eventSubject.asObservable();

  private selectedEventSubject = new BehaviorSubject<EventModel>(this.eventModel);
  selectedEventAction$ = this.selectedEventSubject.asObservable();

  noOfSeats$ = of(1, 2, 3, 4, 5, 6);

  getEvents$ = of(importData.events).pipe(map(tempEvents => tempEvents.map(event => ({
    id: +event.id,
    eventName: event.eventName,
    eventDate: event.eventDate,
    availableSeats: event.availableSeats,
    imageUrl: event.imageUrl
  } as EventModel))));

  getEventsFilterByEventName$ = combineLatest([
    this.getEvents$,
    this.eventAction$
  ]).pipe(
    map(([events, eventName]) => events.filter(x => eventName ? x.eventName.toLocaleLowerCase()
      .includes(eventName.toLocaleLowerCase()) : true)
    ));

  selectedEvent(eventModel: EventModel) {
    this.selectedEventSubject.next(eventModel);
  }

  eventSearch(eventName: string) {
    this.eventSubject.next(eventName);
  }
}

