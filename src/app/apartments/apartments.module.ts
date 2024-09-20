import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ApartmentCenterComponent } from './apartment-center/apartment-center.component';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { ApartmentEditComponent } from './apartment-edit/apartment-edit.component';
import { ApartmentsRoutingModule } from './apartments-routing.module';

@NgModule({
  declarations: [
    ApartmentCenterComponent,
    ApartmentListComponent,
    ApartmentDetailsComponent,
    ApartmentEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ApartmentsRoutingModule
  ]
})
export class ApartmentsModule { }
