import { HostComponent } from './content-projection/host/host.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxComponent } from './ngrx/ngrx-base/ngrx.component';

const routes: Routes = [
  { path: '', component: HostComponent },
  { path: 'ngrx', component: NgrxComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ConceptsRoutingModule { }
