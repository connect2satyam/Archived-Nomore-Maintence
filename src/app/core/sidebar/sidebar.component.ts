import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'satyas-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isUserLogged = false;
  userName: string;
  subOnlineStatus: Subscription;

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.subOnlineStatus = this.authService.getOnlineStatusAction$.subscribe(isUserLogged => {
      this.isUserLogged = isUserLogged;
    });
  }
}
