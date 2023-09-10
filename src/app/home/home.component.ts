import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  housingService: HousingService = inject(HousingService);
  housingLocationList: HousingLocation[];
  filteredLocationList: HousingLocation[];
  housingSearch: FormControl;

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
    this.housingSearch = new FormControl('');
  }

  onSearch() {
    this.filterResults(this.housingSearch.value);
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList
    }
    else {
      this.filteredLocationList = this.housingLocationList.filter(h => h.city.toLowerCase().includes(text.toLowerCase()));
    }
  }
}
