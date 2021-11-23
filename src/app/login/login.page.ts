import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  entry:string=""

  //Function used to check whether the pin value entered by user is correct, If not an alert is presented to the user telling them they did not enter the correct value
  button(){
    if (this.entry=="1995"){
      console.log("Entry granted")
      this.route.navigate(['/home']);
    }
    else{
      alert("The pin entered was not correct")
      console.log("You have been denied entry!")
    }
  }

}
