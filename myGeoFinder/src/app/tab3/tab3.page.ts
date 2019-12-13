import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

	title = "myGeoFinder";
	author = "Henrik Olsen (0913075)";
	course = "SWDV-650, Week 8 - Final Project";
	period = "Maryville University, Fall 2019";

	paragraph1 = "This tab was supposed to have the device's native compass, showing the location and how it changes when moving in different directions based on the compass.";
	paragraph2 =  "Unfortunately, that functionality (= native plugin) is not currently available for Ionic, but hopefully will be sometime in the near future."


  constructor() {}

}
