import $ from 'jquery';
import { Component } from '@angular/core';


@Component({
  selector: 'satyas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle() {
    $('#sidebar').toggleClass('active');
  }
}
