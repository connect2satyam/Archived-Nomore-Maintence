import { Component, Input } from '@angular/core';
import {FormControl} from '@angular/forms'
import {isNullOrUndefined} from 'util';
import { ValidationService } from 'src/app/shared/validation.service';

@Component ({
    selector: 'satyas-error-message',
    templateUrl: './error-message.component.html',
    styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {
    @Input() control: FormControl;
    @Input() counter: number;

    get errorMessage() {
        if (!isNullOrUndefined(this.control)) {
            for (const propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName], this.counter);
                }
            }
            return null;
        } else {
            return null;
        }
    }
}
