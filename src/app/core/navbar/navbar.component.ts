import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'satyas-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() {}
  @Output() eventoNavbar = new EventEmitter();
  dateTime: Date;

  ngOnInit(): void {
    setInterval(() => {
      this.dateTime = new Date();
    }, 1000);
  }



  toggleMenu() {
    this.eventoNavbar.emit();
  }
}
