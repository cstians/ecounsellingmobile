import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  constructor(public popoverCtrl:PopoverController,private router:Router) {}

  ngOnInit() {}
    
    cancel(){
      this.popoverCtrl.dismiss();
      }
      ok(){

      }
  
    }

