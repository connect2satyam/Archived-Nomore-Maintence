import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostComponent } from './content-projection/host/host.component';
import { DateviewerComponent } from './content-projection/dateviewer/dateviewer.component';
import { ProjectionComponent } from './content-projection/projection/projection.component';
import { ConceptsRoutingModule } from './concepts-routing.module';

@NgModule({
  declarations: [HostComponent, DateviewerComponent, ProjectionComponent],
  imports: [
    CommonModule,
    ConceptsRoutingModule
  ],
  exports: []
})
export class ConceptsModule { }
