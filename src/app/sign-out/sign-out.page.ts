import { Component, OnInit } from '@angular/core';
import { IonRefresher } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.page.html',
  styleUrls: ['./sign-out.page.scss'],
  providers: [Geolocation]
})
export class SignOutPage implements OnInit {

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
  }
  
  signOutFunction(){

  }
}


