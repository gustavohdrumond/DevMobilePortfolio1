import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';


@IonicPage()
@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html',
})
export class InputsPage {

  login: string = '';
  senha: string = '';
  mensagem: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  enviar (campoLogin, campoSenha){
    this.login = campoLogin;
    this.senha = campoSenha;
    if (campoLogin === 'gustavo' && campoSenha ==='123'){
    this.navCtrl.push(WelcomePage);
  } else{
    this.mostrarAlert()    
  }
  }
  mostrarAlert(){
    let prompt = this.alertCtrl.create({
    message : 'Seus dados estão incorretos! Tente novamente',
    buttons: [
      {
        text: 'OK',
      }
    ]
  });
  prompt.present();
  }
}
