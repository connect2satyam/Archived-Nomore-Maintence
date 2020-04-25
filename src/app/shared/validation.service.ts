import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';
@Injectable({
    providedIn: 'root'
})
export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any, counter?: number) {
        const config = {
            required: 'Required',
            nameOfAttendeeRequired: `Please enter the name of Attendee ${counter > 1 ? counter : ''}`,
            userNameRequired: 'Please enter your name',
            invalidName: 'Only letters and spaces are allowed',
            emailRequired: 'Please enter your email',
            invalidEmail: 'Invalid email',
            invalidPhone: 'Please enter 10 digit phone number',
            noOfSeatsValidation: 'Please enter number of seats',
            noOfSeatsExceeded: 'Number of seats selected is more than available seats'
        };

        return config[validatorName];
    }

    static nameValidation(control: AbstractControl): { [key: string]: boolean } | null {
        if (control.untouched && control.value === '') {
            return { userNameRequired: true };
        }
        if (control.dirty && control.value === '') {
            return { userNameRequired: true };
        }
        if (control.validator.name.toLowerCase() === 'required') {
            return { userNameRequired: true };
        }
        if (isNullOrUndefined(control.value) || control.value === '') {
            return null;
        }
        if (control.value.match(/[a-zA-Z ]$/)) {
            return null;
        } else {
            return { invalidName: true };
        }
    }

    static emailValidation(control: AbstractControl): { [key: string]: boolean } | null {
        if (control.untouched && control.value === '') {
            return { emailRequired: true };
        }
        if (control.dirty && control.value === '') {
            return { emailRequired: true };
        }
        if (isNullOrUndefined(control.value) || control.value === '') {
            return null;
        }
        if (control.value.match(/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)) {
            return null;
        } else {
            return { invalidEmail: true };
        }
    }

    static phoneValidation(control: AbstractControl): { [key: string]: boolean } | null {
        if (isNullOrUndefined(control.value) || control.value === '') {
            return null;
        }
        if (control.value.match(/^[0-9]{10}$/)) {
            return null;
        } else {
            return { invalidPhone: true };
        }
    }

    static noOfSeatsValidator(control: AbstractControl): { [key: string]: boolean } | null {
        return { noOfSeatsExceeded: true };
    }

    static attendeesValidation(control: AbstractControl): { [key: string]: boolean } | null {
        if (control.untouched && control.value === '') {
            return { nameOfAttendeeRequired: true };
        } else if (isNullOrUndefined(control.value) || control.value === '') {
            return null;
        }
    }
}
