import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	title = "myGeoFinder";
	author = "Henrik Olsen (0913075)";
	course = "SWDV-650, Week 8 - Final Project";
	period = "Maryville University, Fall 2019";
	appDescription1 = "myGeoFinder is a mobile app that utilizes your phone's geolocation in order to help you better zoom in on the exact location of a geocache.";
	appDescription2 = "On the second tab, you will find the longitude and latitude of your current position. Your position can be updated manually (by the press of a button) or automatically (if you turn the feature on).";
	appDescription3 = "On the third tab, you will find your device's compass, which can help you determine which direction to move.";

  constructor() {}

}
