import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ShouyeqqPage } from '../shouyeqq/shouyeqq';
import { ModalController} from 'ionic-angular';
import { AddpagePage } from '../addpage/addpage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab2Root = HomePage;
  tab1Root = ShouyeqqPage;
  tab3Root = ContactPage;


  constructor(public modalCtrl: ModalController) {

  }
  
}
