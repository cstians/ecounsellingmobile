import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-pass-reset-popver',
  templateUrl: './pass-reset-popver.component.html',
  styleUrls: ['./pass-reset-popver.component.scss'],
})
export class PassResetPopverComponent implements OnInit {

  constructor(public popoverCtrl:PopoverController,public router:Router,public socialsharing:SocialSharing) { }
  
  ngOnInit() {}

  

  

}
