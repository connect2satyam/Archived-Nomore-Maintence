import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Tela1Component } from '../telas/tela1/tela1.component';
import { Tela2Component } from '../telas/tela2/tela2.component';
import { Tela3Component } from '../telas/tela3/tela3.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    Tela1Component,
    Tela2Component,
    Tela3Component,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [FooterComponent, SidebarComponent, NavbarComponent]
})
export class CoreModule {}
