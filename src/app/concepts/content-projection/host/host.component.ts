import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DateviewerComponent } from '../dateviewer/dateviewer.component';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'satyas-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit, AfterViewInit {

  @ViewChild(DateviewerComponent) dateviewerComponent: DateviewerComponent;

  list: number[] = [1, 2, 3];
  list1: Array<number> = [4, 5, 6];
  tuple: [string, number, boolean?];
  constructor() {
    // console.log(this.dateviewerComponent?.today);
  }

  ngAfterViewInit(): void {

    // console.log(this.dateviewerComponent.today);

    // setInterval(() => {
    //   this.dateviewerComponent.today = new Date();
    // }, 1000);
  }

  onClick(txtValue: string) {
    debugger;
    const test = txtValue;
  }
  ngOnInit(): void {
    const color = Color.Blue;

    // this.tuple = ['satya', 300000, false];
    // console.log(this.tuple);
    // this.list.forEach((x) => {
    //   console.log(x);
    // });

    // console.log(this.list1);
  }

}

enum Color {
  Red,
  Green = 1000,
  Blue
}
