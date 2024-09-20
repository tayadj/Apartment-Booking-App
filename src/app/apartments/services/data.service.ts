import { Injectable } from '@angular/core';

import { Apartments } from '../mock-apartment-list';
import { Apartment } from '../models/apartment.model';

@Injectable({
	providedIn: 'root'
})

export class DataService {

  private apartments = Apartments;
  private globalId = 100;

	getApartments() {
		return this.apartments;
	}

	getApartment(id: number) {
		return this.apartments.find(apartment => apartment.id === id);
	}

	addApartment(apartment: Apartment) {
    const newId = this.globalId;
    this.globalId = this.globalId + 1;
		this.apartments.push({ ...apartment, id: newId });
	}

	deleteApartment(id: number) {
		this.apartments = this.apartments.filter(apartment => apartment.id !== id);
	}

	constructor() { }
}
