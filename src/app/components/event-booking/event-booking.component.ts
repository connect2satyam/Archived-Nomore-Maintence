import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { EventModel } from 'src/app/shared/event.model';
import { JsonServerService } from 'src/app/shared/json-server.service';
import { ValidationService } from 'src/app/shared/validation.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'satyas-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.scss']
})
export class EventBookingComponent implements OnInit, OnDestroy {
  selectedEvent$: Observable<EventModel>;
  noOfSeats: number[] = [];
  bookingForm: FormGroup;
  subscription: Subscription;
  isDataSubmitted = false;
  selectedEventModel: EventModel;

  get attendees(): FormArray {
    return this.bookingForm.get('attendees') as FormArray;
  }

  getName(counter: number): string {
    return counter === 0 ? 'Name of Attendee ' : 'Name of Attendee ' + (counter + 1);
  }

  constructor(
    private jsonServerService: JsonServerService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService) { }


  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      eventName: ['', []],
      availableSeats: ['', []],
      userName: ['', ValidationService.nameValidation],
      email: ['', ValidationService.emailValidation],
      phone: ['', ValidationService.phoneValidation],
      noOfSeats: ['1', []],
      attendees: this.fb.array([this.buildAttendees()])
    });

    this.selectedEvent$ = this.jsonServerService.selectedEventAction$;
    this.selectedEvent$.subscribe(x => {
      this.selectedEventModel = x;
      this.bookingForm.get('eventName').setValue(x.eventName);
      this.bookingForm.get('availableSeats').setValue(x.availableSeats);
    });

    this.subscription = this.jsonServerService.noOfSeats$.subscribe(x => {
      this.noOfSeats.push(x);
    });
  }


  buildAttendees(): FormGroup {
    return this.fb.group({
      attendee: ['', ValidationService.attendeesValidation]
    });
  }

  addAttendees(noOfAttendees: number): void {
    const availableSeats = this.bookingForm.get('availableSeats').value;
    const noOfSeats = this.bookingForm.get('noOfSeats');

    noOfSeats.clearValidators();

    let tempAttendees = +noOfAttendees;

    if (tempAttendees === 0) {
      noOfSeats.setValidators(Validators.required);
    }

    if (tempAttendees === 1) {
      noOfSeats.clearValidators();
    }

    if (tempAttendees > availableSeats) {
      noOfSeats.setValidators(ValidationService.noOfSeatsValidator);
    }

    if (tempAttendees > 0 && (tempAttendees <= availableSeats)) {
      noOfSeats.clearValidators();
    }

    noOfSeats.updateValueAndValidity();

    this.attendees.clear();
    if (noOfSeats.validator === null) {
      while (tempAttendees > 0) {
        this.attendees.push(this.buildAttendees());
        tempAttendees--;
      }
    }

  }

  submit() {
    this.isDataSubmitted = true;
    console.log('Send to API ==> ' + JSON.stringify(this.bookingForm.value));
    this.toastr.success('Success', 'Ticket booked');
  }

  cancel() {
    this.toastr.warning('Success', 'Navigated to listing page');
    this.router.navigate(['event-listing']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
