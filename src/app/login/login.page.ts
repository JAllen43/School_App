import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route: Router, public toastController:ToastController) { }

  ngOnInit() {
  }
  entry:string=""
  
  //To be used to present the user with a message telling them they have got the PIN incorrect
  async incorrectPIN() {
    const toast = await this.toastController.create({
      message: 'The PIN you entered was incorrect.',
      duration: 2000
    });
    toast.present();
  }

  //Function used to check whether the pin value entered by user is correct, If not an alert is presented to the user telling them they did not enter the correct value
  button(){
    if (this.entry=="1995"){
      console.log("Entry granted")
      this.route.navigate(['/home']);
    }
    else{
      this.incorrectPIN()
      console.log("You have been denied entry!")
    }
  }

}
