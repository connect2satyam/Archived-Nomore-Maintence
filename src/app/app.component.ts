import $ from 'jquery';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'satyas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  styleClass = {
    top: '1px',
    left: '1px'
  };

  constructor(private renderer: Renderer2) { }

  getStyles() {
    return this.styleClass;
  }

  ngOnInit(): void {

  }
  toggle() {
    $('#mySidebar').toggleClass('active');
  }

  ngAfterViewInit(): void {
    const source = fromEvent(document, 'mousemove').pipe(map((e: MouseEvent) => {
      return {
        x: e.clientX,
        y: e.clientY
      };
    }));

    source.subscribe(
      value => {
        this.styleClass.left = value.x - 1 + 'px';
        this.styleClass.top = value.y - 74 + 'px';
      },
      e => console.log(`error ${e}`),
      () => console.log(`complete`)
    );
  }
}
