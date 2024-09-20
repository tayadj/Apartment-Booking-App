import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../services/data.service';
import { Apartment } from '../models/apartment.model';

@Component({
  selector: 'app-apartment-edit',
  templateUrl: './apartment-edit.component.html',
  styleUrl: './apartment-edit.component.css'
})

export class ApartmentEditComponent {
	newApartment: Partial<Apartment> = {};
	dataId: number = -1;

	constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {
		this.route.queryParams.subscribe(params => { 
			if (Object.keys(params).length > 0) {
				this.dataId = Number(params['id']);
				this.newApartment = this.dataService.getApartment(this.dataId) ?? {};
			}
		});
	}
	
        deleteApartment(id: number) {
                if (confirm("Are you sure?")) {
                        this.dataService.deleteApartment(id);
                        alert("Successfully deleted.");
                }
        }

	addApartment() {
		if (this.newApartment.description && this.newApartment.price) {
			if (this.dataId !== -1) {
				this.dataService.deleteApartment(this.dataId);
			}
			const apartmentToAdd: Apartment = {
				id: this.dataId,
				description: this.newApartment.description,
				price: this.newApartment.price
			}		
			this.dataService.addApartment(apartmentToAdd);
			this.newApartment = {};
			alert("Successfully added.");
			this.dataId = -1;
			this.router.navigate(['/main']);			
		} else {
			alert("Fill in all the fields.");
		}		
	}
}
