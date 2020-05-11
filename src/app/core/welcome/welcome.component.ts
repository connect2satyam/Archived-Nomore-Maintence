import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'satyas-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public pageTitle = 'Welcome to my demo';
  constructor() { }

  ngOnInit(): void {
  }

}
