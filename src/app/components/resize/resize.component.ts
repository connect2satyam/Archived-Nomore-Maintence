import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'satyas-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.scss']
})
export class ResizeComponent implements OnInit {
  public satyaStyle: object = {
    position: 'absolute',
    bottom: `calc(11vh)`,
    left: `calc(1vw)`,
    width: `calc(97vw)`,
  };
  constructor() { }

  ngOnInit(): void {
  }



  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX = 200;
    const MAX_DIMENSIONS_PX = 595;
    if ((event.rectangle.height && event.rectangle.height < MIN_DIMENSIONS_PX) || event.rectangle.height > MAX_DIMENSIONS_PX) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.satyaStyle = {
      position: 'absolute',
      bottom: `calc(11vh)`,
      left: `calc(1vw)`,
      width: `calc(97vw)`,
      height: `${event.rectangle.height}px`
    };
  }

}
