import { CourseRegistration } from './../../shared/course-registration';
import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl } from '@angular/forms';
import { JsonServerService } from 'src/app/shared/json-server.service';
import { EventModel } from 'src/app/shared/event.model';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'satyas-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.scss']
})
export class ResizeComponent implements OnInit {
  public satyaStyle: object = {
    position: 'absolute',
    bottom: `calc(10vh)`,
    left: `calc(1vw)`,
    width: `calc(97vw)`,
  };
  getEvents$: Observable<EventModel[]>;
  formGroup = this.fb.group({
    eventName: ['']
  });
  // private socialUser$: Observable<SocialUser>;
  private loggedIn: boolean;
  courseRegistration$: Observable<CourseRegistration[]>;

  constructor(
    private jsonServerService: JsonServerService,
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

    this.courseRegistration$ = this.jsonServerService.getCourseRegistration();



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
      bottom: `calc(10vh)`,
      left: `calc(1vw)`,
      width: `calc(97vw)`,
      height: `${event.rectangle.height}px`
    };
  }

}
