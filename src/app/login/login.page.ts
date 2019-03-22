import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, PopoverController } from '@ionic/angular';
import { PassResetPopverComponent} from '../pass-reset-popver/pass-reset-popver.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user_name:string="";
  user_password:string="";
  constructor(public navCtrl:NavController,public toastCtrl:ToastController,public popCtrl:PopoverController) { }

  register(){
    this.navCtrl.navigateForward('/register');
  }

  async logIn(){
    if(this.user_name!="doten"){
    
      const toast= await this.toastCtrl.create({
        message:"You have enter invalid user name",
        duration:3000,
      });
      return await toast.present();
    
    }
    
    
    else if(this.user_password!="doten"){
    
      const toast= await this.toastCtrl.create({
        message:"You have enter invalid password",
        duration:3000,
      });
      return await toast.present();
    }
    
    else{
      this.navCtrl.navigateForward('/home');
    }

    
  }
  async pop(event){
    const popover= await this.popCtrl.create({
      component:PassResetPopverComponent,
      event
    });
    
    return await popover.present();
  }

  ngOnInit() {
  }

}
