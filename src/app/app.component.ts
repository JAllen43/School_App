import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' }, //Home menu button with correct hyperlink
    { title: 'Notices', url: '/notices', icon:'alert-circle'}, //Notices menu button with correct hyperlink
    { title: 'Documents', url: '/documents', icon: 'newspaper' }, //Documents menu button with correct hyperlink
    { title: 'Food Order', url:'/food-order', icon: 'fast-food'}, //Food order menu button with correct hyperlink
    { title: 'Sign In', url: '/sign-in', icon: 'log-in' }, //Sign In menu button with correct hyperlink
    { title: 'Sign Out', url: '/sign-out', icon: 'log-out' }, //Sign Out menu button with correct hyperlink
    { title: 'Contact', url: '/contact', icon: 'call' } //Contact menu button with correct hyperlink    
  ];
  
}
