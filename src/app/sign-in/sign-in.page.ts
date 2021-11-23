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
  console.log("Step 1")
  this.checkGPSPermission()
  console.log("Step 2")
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
       console.log('Error getting location', error);
     });    
  }

  signInFunction(){
    let date = new Date()
    console.log("Current Date ", date) 
      this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude=resp.coords.latitude
      this.longitude=resp.coords.longitude
      console.log("lat: ", this.latitude)
      console.log("long", this.longitude)
     }).catch((error) => {
       console.log('Error getting location11111', error);
     });
  
  if (this.latitude < -0.28499 && this.latitude > -0.39083){
    console.log("This works")

  }
  else{
    console.log("You are not in the area")
  }
    
}

async alert(){
  const alert = await this.alertController.create({
    header: 'Out of range',
    subHeader: 'Subtitle',
    message: 'You are currently not within the required range to sign in, try going to school or a different position on site to sign in.',
    buttons: ['OK', 'Cancel']
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}


update(){
  var params = {
    spreadSheetID: '14-19UX1L3vVxXHfVDaoylc2ii2ShWHbRYK84BQM6WXM'
    
  }
}



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
askToTurnOnGPS() {
  this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
    () => {
      // When GPS Turned ON call method to get Accurate location coordinates
      this.getLocationCoordinates()
    },
    error => alert('Error requesting location permissions ' + JSON.stringify(error))
  );
}
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
