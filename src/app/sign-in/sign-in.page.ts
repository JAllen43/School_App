import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  providers: [Geolocation]
})
export class SignInPage implements OnInit {
  pinDrop=false;
  latitude=0
  longitude=0
  client="390079927042-fvq2v03lkual493vvf9fs7200jp7rhuc.apps.googleusercontent.com"
  api_key="AIzaSyBPjgITffDnb-d_9UXB0fIbMcU4fIUEhpY"
  locationCoords: any;
  timetest: any;
  constructor(private geolocation: Geolocation, public alertController: AlertController, private androidPermissions: AndroidPermissions,
    private locationAccuracy: LocationAccuracy) {

      this.locationCoords = {
        latitude: "",
        longitude: "",
        accuracy: "",
        timestamp: ""
      }
      this.timetest = Date.now()
     }

  ngOnInit() { 
  //Checks whether the application has permission to use the GPS function on the phone
  this.checkGPSPermission()
  //Acquires the longitude and latitude values to figure out whether to display the Sign-In form
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude=resp.coords.latitude
      this.longitude=resp.coords.longitude
      if (this.latitude < -0.28499 && this.latitude > -0.39083){
      this.pinDrop=true
    }
    else{
      this.pinDrop=false
    }
     }).catch((error) => {
       //Posts an arror if there was an error getting the location
       console.log('Error getting location', error);
     });    
  }



  //Checks to see if application has persmission to turn GPS on. Code developed in conjunction with ideas by freakyjolly.com (2021)
  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {

          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {

          //If not having permission ask for permission
          this.requestGPSPermission();
        }
      },
      err => {
        alert(err);
      }
    );
}

//Requests permission to turn GPS on. Code developed in conjunction with ideas by freakyjolly.com (2021)
requestGPSPermission() {
  this.locationAccuracy.canRequest().then((canRequest: boolean) => {
    if (canRequest) {
      console.log("4");
    } else {
      //Show 'GPS Permission Request' dialogue
      this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
        .then(
          () => {
            // call method to turn on GPS
            
            this.askToTurnOnGPS();
            
          }
        );
    }
  });
}

//Asks to turn the GPS feature on. Code developed in conjunction with ideas by freakyjolly.com (2021)
askToTurnOnGPS() {
  this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
    () => {
      // When GPS Turned ON call method to get Accurate location coordinates
      this.getLocationCoordinates()
    },
    error => alert('Error requesting location permissions ' + JSON.stringify(error))
  );
}

// Gets the current location of the user of the application. Code developed in conjunction with ideas by freakyjolly.com (2021)
getLocationCoordinates() {
  this.geolocation.getCurrentPosition().then((resp) => {
    this.locationCoords.latitude = resp.coords.latitude;
    this.locationCoords.longitude = resp.coords.longitude;
    this.locationCoords.accuracy = resp.coords.accuracy;
    this.locationCoords.timestamp = resp.timestamp;
  }).catch((error) => {
    alert('Error getting location' + error);
  });
}

}


