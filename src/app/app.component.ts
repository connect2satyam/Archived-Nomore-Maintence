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
  @ViewChild('circle', { static: false }) myCircle: ElementRef;

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
    // this.someInput.nativeElement.value = 'Anchovies! 🍕🍕';

    // this.renderer.setStyle(this.someInput.nativeElement, 'background-color', '#ff0000');

    // this.renderer.setStyle(this.myCircle.nativeElement, 'background-color', '#ff9999');
    // this.renderer.setStyle(this.myCircle.nativeElement, 'backgroundColor', 'grey');
    // this.renderer.setStyle(this.myCircle.nativeElement, 'color', 'red');
    // this.renderer.setStyle(this.myCircle.nativeElement, 'top', 179);
    // this.myCircle.nativeElement.value = 'I Love You';
    // this.renderer.setAttribute(this.myCircle.nativeElement, 'outerText', 'I Love You');

    const source = fromEvent(document, 'mousemove').pipe(map((e: MouseEvent) => {
      return {
        x: e.clientX,
        y: e.clientY
      };
    }));

    source.subscribe(
      value => {
        // this.styleClass.left = value.x - 10 + 'px';
        // this.styleClass.top = value.y - 84 + 'px';
        this.styleClass.left = value.x - 1 + 'px';
        this.styleClass.top = value.y - 74 + 'px';
        console.log(value.x);
      },
      e => console.log(`error ${e}`),
      () => console.log(`complete`)
    );
  }
}
