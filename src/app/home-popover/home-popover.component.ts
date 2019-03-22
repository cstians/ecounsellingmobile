import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home-popover',
  templateUrl: './home-popover.component.html',
  styleUrls: ['./home-popover.component.scss'],
})
export class HomePopoverComponent implements OnInit {

  constructor(public popoverCtrl:PopoverController,private router:Router) { }

  ngOnInit() {}
 
  cancel(){
    this.popoverCtrl.dismiss();
    }
    ok(){
     this.router.navigateByUrl('/login');
     this.popoverCtrl.dismiss();
    }
}

