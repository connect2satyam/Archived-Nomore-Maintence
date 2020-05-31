import { DateviewerComponent } from './../dateviewer/dateviewer.component';
import { Component, OnInit, AfterContentInit, ContentChild, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'satyas-projection',
  templateUrl: './projection.component.html',
  styleUrls: ['./projection.component.scss']
})
export class ProjectionComponent implements OnInit, AfterContentInit {

  @ContentChild(DateviewerComponent) dateviewerComponent: DateviewerComponent;
  // @ContentChildren(DateviewerComponent) dateviewerComponentList: QueryList<DateviewerComponent>;
  constructor() { }


  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    // Below code not working for multiple components like as @ViewChildren.. not sure for @ContentChildren is not working.
    // -- Investigate this later.

    // this.dateviewerComponentList.toArray().forEach((currentDateviewerComponent) => {
    //   setInterval(() => {
    //     currentDateviewerComponent.today = new Date();
    //   }, 1000);
    // });

    setInterval(() => {
      this.dateviewerComponent.today = new Date();
    }, 1000);

  }

}
