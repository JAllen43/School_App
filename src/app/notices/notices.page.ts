import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-notices',
  templateUrl: './notices.page.html',
  styleUrls: ['./notices.page.scss'],
})
export class NoticesPage implements OnInit {

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }
  //Link to the google docs that a suer can manually view if the google docs has not updated.
  noticeLink(){
    this.iab.create('https://docs.google.com/document/d/1QSrQL1cxuelYkdEazSzR4CKFX42SdlUHAxWDgdD-hik/edit?usp=sharing', '_system');
    
  }

}
