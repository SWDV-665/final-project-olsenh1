import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ToastController } from '@ionic/angular';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

	title = "myGeoFinder";
	author = "Henrik Olsen (0913075)";
	course = "SWDV-650, Week 8 - Final Project";
	period = "Maryville University, Fall 2019";

	latitude: string = "";
	longitude: string = "";

	autoMode: boolean = false;
	watchLocationUpdates: any;
	locationSubscription: any;

	paragraph1 = "To save your device's battery, myGeoFinder does not automatically update your location by default. Click the [Update Location] button to update the coordinates of your current location.";
	paragraph2 =  "myGeoFinder can toggle automatic update of your position, but please note that this function uses a lot of battery power and should be left in Off mode to preserve battery, when continuous position updates are not necessary."

	constructor(private geolocation: Geolocation, 
				public toastCtrl: ToastController,
				public locationService: LocationService) {
		this.locate()
	}

	async locate(){
		this.geolocation.getCurrentPosition().then((resp) => {
			this.latitude = resp.coords.latitude.toString();
			this.longitude = resp.coords.longitude.toString();
		}).catch((error) => {
			console.log('Error getting location', error);
		});
		var toastMsg = "Location updated... ";
		const toast = await this.toastCtrl.create({
			message: toastMsg,
			duration: 3000
		});
		toast.present();
		console.log('Location updated manually');
		this.locationService.getUserPosition()
	}

	//toggle event (user changed state of toggle)
	ionToggleChange(){
		this.autoMode = !this.autoMode;
		if (this.autoMode == true) {
			this.watchLocation()
		}
		else {
			this.stopLocationWatch()
		}
	}

	//Start location update watch
    watchLocation(){
		this.watchLocationUpdates = this.geolocation.watchPosition();
		this.locationSubscription = this.watchLocationUpdates.subscribe((resp) => {
			this.latitude = resp.coords.latitude.toString();
			this.longitude = resp.coords.longitude.toString(); 
			console.log('Auto-Update is ON');
		});
	}

	//Stop location update watch
	stopLocationWatch(){
		this.locationSubscription.unsubscribe();
		console.log('Auto-Update is OFF');
	}

}
