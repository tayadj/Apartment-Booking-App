import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ApartmentCenterComponent } from './apartment-center/apartment-center.component';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';

const routes: Routes = [
	{ path: '', component: ApartmentCenterComponent, children: [
		{ path: 'list', component: ApartmentListComponent },
		{ path: 'details/:id', component: ApartmentDetailsComponent }
	]}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class ApartmentsRoutingModule { }
