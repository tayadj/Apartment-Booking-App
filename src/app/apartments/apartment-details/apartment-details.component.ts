import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../services/data.service';
import { Apartment } from '../models/apartment.model';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrl: './apartment-details.component.css'
})

export class ApartmentDetailsComponent implements OnInit {
	apartment!: any;

        constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) {}

	ngOnInit() {
		const id = +this.route.snapshot.paramMap.get('id')!;
		this.apartment = this.dataService.getApartment(id);
	}

	deleteApartment(id: number) {
		if (confirm("Are you sure?")) {
			this.dataService.deleteApartment(id);			
			this.router.navigate(['/main']);
		}
	}

	editApartment(id: number) {
		this.router.navigate(['/edit'], { queryParams: { id: id } });
	}
}
