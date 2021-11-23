import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit() {
    }
  constructor(private route: Router){}
  
  //Redirects the user to the documents page
  documentsPage(){
    this.route.navigate(['/documents']);
  }

  //Redirects the user to the Sign in page 
  logInPage(){
    this.route.navigate(['/sign-in'])
  }
  //Redirects the user to the Sign out page
  logOutPage(){
    this.route.navigate(['/sign-out'])
  }

  //Redirects the user to the contact page
  contactPage(){
    this.route.navigate(['/contact'])
  }
  
  //Redirects the user to the food order page
  foodPage(){
    this.route.navigate(['/food-order'])
  }
  //Redirects the user to the notices page
  noticesPage(){
    this.route.navigate(['/notices'])
  }
}
