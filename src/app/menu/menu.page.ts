import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AppRate } from '@ionic-native/app-rate';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public popoverCtrl:PopoverController, private router:Router,public socialsharing:SocialSharing) { }
  
  Share(){
    this.socialsharing.share('hello','to you',null,'https://www.facebook.com').then((data)=>{
    },(err)=>{
       alert(JSON.stringify(err));
    })
    }



  about(){
    this.router.navigateByUrl('/about');
  }

  mVideo(){
    this.router.navigateByUrl('/home');
  }

  qoute(){
    this.router.navigateByUrl('/quotation');
  }

  feeds(){
    this.router.navigateByUrl('/feedbackpage');
  }

  share(){
    this.router.navigateByUrl('/home');
  }

  rate(){
    this.router.navigateByUrl('/home');
  }
  menu_Home(){
    this.router.navigateByUrl('/home');
  }

async feedpop(event){
      const popover= await this.popoverCtrl.create({
        component:RegisterPage,
        event
      });
      
      return await popover.present();
    }



  ngOnInit() {
  }

}
