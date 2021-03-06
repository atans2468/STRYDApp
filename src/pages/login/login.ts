import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListMasterPage } from '../list-master/list-master';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  constructor(private nav: NavController, public navCtrl: NavController) { }
  
  public openPage1() {
    this.nav.setRoot(LoginPage);
  }

  goToEvents() {
    // go to the MyPage component
    this.nav.setRoot(ListMasterPage);
  }

}