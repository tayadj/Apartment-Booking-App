import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApartmentCenterComponent } from './apartments/apartment-center/apartment-center.component';
import { ApartmentEditComponent } from './apartments/apartment-edit/apartment-edit.component';

const routes: Routes = [
	{ path: '', redirectTo: '/main', pathMatch: 'full' },
	{ path: 'main', loadChildren: () => import('./apartments/apartments.module').then(m => m.ApartmentsModule) },
	{ path: 'edit', component: ApartmentEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
