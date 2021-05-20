import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.page.html',
  styleUrls: ['./pagina4.page.scss'],
})
export class Pagina4Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    console.log("ngOnInit: pagina4");
  }
   ionViewWillEnter(){
    console.log("ionViewWillEnter: pagina4");
  }
  
  ionViewDidEnter(){
    console.log("ionViewDidEnter: pagina4");
  }
  
  ionViewWillLeave(){
    console.log("ionViewWillLeave: pagina4");
  }
  
  ionViewDidLeave(){
    console.log("ionViewDidLeave: pagina4");
  }
  
  ngOnDestroy(){
    console.log("ngOnDestroy: pagina4");
  }
  goToPagina1(){
    this.navCtrl.navigateForward('/home');
  }
   goToPagina2(){
    this.navCtrl.navigateForward('/pagina2');
   }
   goToPagina3(){
    this.navCtrl.navigateForward('/pagina3');
  }
  goToPagina4(){
    this.navCtrl.navigateForward('/pagina4');
  }
  goToPagina5(){
    this.navCtrl.navigateForward('/pagina5');
  }

}
