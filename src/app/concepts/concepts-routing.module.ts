import { HostComponent } from './content-projection/host/host.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ConceptsRoutingModule { }
