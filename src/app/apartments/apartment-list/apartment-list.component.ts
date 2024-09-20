import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrl: './apartment-list.component.css'
})

export class ApartmentListComponent implements OnInit {
	apartments!: any[];	

	constructor(private dataService: DataService) {}

	ngOnInit() {
		this.apartments = this.dataService.getApartments();
	}
}
