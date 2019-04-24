import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { Router } from '@angular/router';
import { RegisterPageModule } from './register.module';
import { ok } from 'assert';
import { HomePopoverComponent } from '../home-popover/home-popover.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user_name:string="";
  user_password:string="";
  user_cpassword:string="";
  qualification:string="";
  constructor(public navCtrl:NavController,public popoverCtrl:PopoverController,private router:Router,public toastCtrl:ToastController,private http: HttpClient) { }

  async popup(event){

    if(this.user_name==""){
      const toast= await this.toastCtrl.create({
        message:"User name field is empty",
        duration:3000,
       
      });
    return await toast.present();
      
    }

    else if(this.user_password=="") {

      const toast= await this.toastCtrl.create({
        message:"Password field is empty",
        duration:3000,
       
      });
    return await toast.present();

    }

    else if(this.user_cpassword==""){

      const toast= await this.toastCtrl.create({
        message:"Confirm password field is empty",
        duration:3000,
       
      });
    return await toast.present();
    }

    else if(this.qualification==""){

      const toast= await this.toastCtrl.create({
        message:"Qualification field is empty",
        duration:3000,
       
      });
    return await toast.present();
    }

    else if(this.user_cpassword!=this.user_password){
  
      const toast= await this.toastCtrl.create({
        message:"password did not match",
        duration:3000
       
      });
    return await toast.present();
  
    }


    else{
      let postData = {
        "name": this.user_cpassword,
        "email": this.user_name,
        "password": this.user_password,
        "designation": this.qualification
      }

      this.http.post('http://localhost:8000/api/signup', postData).subscribe((response) => {
        console.log(response);
        this.navCtrl.navigateForward('/home');
      }, error => {
        console.log(error);
      /*if(JSON.stringify(response['one']) == '"Doten"') {
        this.jsondata = 'Login Success';
      }*/
      });
      /*const popover= await this.popoverCtrl.create({
        component:HomePopoverComponent,
        event
    });*/
    
    //return await popover.present();
    }

  }

  value:number;

 async gender(value){
    if(this.value==1){

      const toast= await this.toastCtrl.create({
        message:"You have selected male",
        duration:3000
       
      });
    return await toast.present();
  
    }
    

  }
   
  register_Home(){
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {

   
  }

}

