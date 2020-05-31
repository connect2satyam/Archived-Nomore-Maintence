import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'satyas-dateviewer',
  templateUrl: './dateviewer.component.html',
  styleUrls: ['./dateviewer.component.scss']
})
export class DateviewerComponent implements OnInit {

  today = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
