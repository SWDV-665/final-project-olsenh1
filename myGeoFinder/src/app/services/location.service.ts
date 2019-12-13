import { Injectable } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';

@Injectable({
	providedIn: 'root'
})

export class LocationService {
   
   options: GeolocationOptions;
   currentPos: Geoposition;

	constructor(private geolocation: Geolocation) {}

	getUserPosition() {
		console.log("Location Service:");
		return new Promise((resolve, reject) => {
			this.options = {
				maximumAge: 3000,
				enableHighAccuracy: true
			};
  
		this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {
			this.currentPos = pos;
			const location = {
				Latitude: pos.coords.latitude,
				Longitude: pos.coords.longitude,
				Time: new Date(),
			};
			console.log('Location:', location);
			resolve(pos);
		}, (err: PositionError) => {
			console.log("error : " + err.message);
			reject(err.message);
		});
		});
	}
}
