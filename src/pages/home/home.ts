import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController) {

  }

  showToast1(position: string){
    let toast = this.toastCtrl.create({
      message: 'Você clicou em Calendário',
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }

  showToast2(position: string){
    let toast = this.toastCtrl.create({
      message: 'Você clicou em Alarme',
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }

  showToast3(position: string){
    let toast = this.toastCtrl.create({
      message: 'Você clicou em Câmera',
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }

  showToast4(position: string){
    let toast = this.toastCtrl.create({
      message: 'Você clicou em Ligações',
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }

  showToast5(position: string){
    let toast = this.toastCtrl.create({
      message: 'Você clicou em Contatos',
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }

}