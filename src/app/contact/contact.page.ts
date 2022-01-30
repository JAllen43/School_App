import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  call:boolean;
  email:boolean;
  location:boolean;
  inputText:string;
  constructor(public alertController: AlertController, private callNumber: CallNumber, public composer: EmailComposer) { }

  ngOnInit() {
    
  }
   // Presents an alert with an option of whether the user wants to call the attendance officer
  async presentCallOption() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Call warning',
      subHeader: 'You are about to make a call',
      message: "You are about to call Mrs Smith's number, are you sure you want to do this?.",
      buttons: ['No', 
      {text: "Yes",
      handler:()=>{
        console.log("This works")
        this.callNo()}}
      ],
    });

    await alert.present();
  }

  //This handles the call that is trying to be placed, developed with code based on Ionic (n.d.)
  callNo(){
    this.callNumber.callNumber("123456789", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

  
  //Present an alert to let the user know that they are about to be redirected to an email client to communicate, developed using the alerts from the Ionic framework
  async presentEmailOption() {
    const alert = await this.alertController.create({
      header: 'Email warning',
      subHeader: 'You are about to send an email',
      message: "You are about to be redirected to outlook, are you sure you want to do this?.",
      buttons: ['No', 
      {text: "Yes",
      handler:()=>{
        console.log("This works")
        this.openEmailAddress()}}
      ],
    });

    await alert.present();
  }
  //Opens up the email application selector ready to email the recipient stated below, developed with code based on Vikas (2019)
  openEmailAddress(){
  this.composer.open({
    to: 'j.allen@parmiters.herts.sch.uk'
})
  }




}
