import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DateviewerComponent } from '../dateviewer/dateviewer.component';

@Component({
  selector: 'satyas-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit, AfterViewInit {

  @ViewChild(DateviewerComponent) dateviewerComponent: DateviewerComponent;
  constructor() {
    // console.log(this.dateviewerComponent?.today);
  }

  ngAfterViewInit(): void {
    // console.log(this.dateviewerComponent.today);

    // setInterval(() => {
    //   this.dateviewerComponent.today = new Date();
    // }, 1000);
  }

  ngOnInit(): void {
  }

}
