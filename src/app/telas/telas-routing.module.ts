import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tela2Component } from './tela2/tela2.component';
import { Tela1Component } from './tela1/tela1.component';
import { Tela3Component } from './tela3/tela3.component';

const routes: Routes = [
  { path: '', redirectTo: '/home1', pathMatch: 'full' },
  { path: 'home1', component: Tela1Component },
  { path: 'home2', component: Tela2Component },
  { path: 'home3', component: Tela3Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelasRoutingModule {}
