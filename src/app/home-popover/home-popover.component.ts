import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Route, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home-popover',
  templateUrl: './home-popover.component.html',
  styleUrls: ['./home-popover.component.scss'],
})
export class HomePopoverComponent implements OnInit {

  constructor(public popoverCtrl:PopoverController,private router:Router) { }
  designation='';
  ngOnInit() {}
 
  cancel(){
    this.popoverCtrl.dismiss();
    }
    ok(){
      let navigationExtras:NavigationExtras={
        state:{
        designation:this.designation,
        }
      }
     this.router.navigate(['register'],navigationExtras);
     this.popoverCtrl.dismiss();
     //this.router.navigateByUrl('/login');
     
    }
}

