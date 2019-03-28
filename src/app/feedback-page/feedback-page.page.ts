import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.page.html',
  styleUrls: ['./feedback-page.page.scss'],
})
export class FeedbackPagePage implements OnInit {
  
  feedback:string="";
  constructor(public toastCtrl:ToastController) { }

  async send(){
    if(this.feedback=="Good"){
    
      const toast= await this.toastCtrl.create({
        message:"Successfully sent",
        duration:3000,
      });
      return await toast.present();
    
    }
  }

  ngOnInit() {
  }

}
