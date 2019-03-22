import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { ok } from 'assert';
import { FeedbackPage } from '../feedback/feedback.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public popoverCtrl:PopoverController, private router:Router) { }

  about(){
    this.router.navigateByUrl('/about');
  }

  mVideo(){
    this.router.navigateByUrl('/home');
  }

  qoute(){
    this.router.navigateByUrl('/home');
  }

  feed(){
    this.router.navigateByUrl('/feedback');
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
