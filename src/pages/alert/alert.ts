import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  email: string ='';
  telefone: string ='';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }


  mostrarAlert(){
    let prompt = this.alertCtrl.create({
      title: 'Informe seus dados',
      message: "Digite o seu e-mail e telefone",
      inputs:[
        {
          name: 'email',
          placeholder: 'E-mail'
        },
        {
          name: 'telefone',
          placeholder: 'Telefone'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Clicou no Cancelar');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            this.email = 'Seu e-mail é: ' + data.email;
            this.telefone = 'Seu telefone é: ' + data.telefone;
          }
        }
      ]
    });
    prompt.present();
  }

}