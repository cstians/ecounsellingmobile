import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { Router, ActivatedRoute } from '@angular/router';
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
  gender:string="";
  qualification:string="";
  designation:string="";
 
  constructor(public navCtrl:NavController,public popoverCtrl:PopoverController,private router:Router,public toastCtrl:ToastController,private http: HttpClient,private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.designation=this.router.getCurrentNavigation().extras.state.designation;
        
    }
   
    });
   
    
   }

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
      let postData  = {
        "name": this.user_name,
        "email": this.user_cpassword,
        "password": this.user_password,
        "gender":this.gender,
        "qualification":this.qualification,
        "designation":this.designation
    
      }

      this.http.post('http://localhost:8000/api/signup', postData).subscribe((response) => {
        console.log(response);
       this.router.navigateByUrl('/login');
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

 
  
   
  register_Home(){
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {

   
  }

}

