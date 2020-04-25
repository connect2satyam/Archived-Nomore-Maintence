import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'satyas-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.scss']
})
export class NavComponentComponent implements OnInit, OnDestroy {
  pageTitle = 'SatyaS Demo';

  constructor() { }
  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
