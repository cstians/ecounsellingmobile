import { Component, OnInit } from '@angular/core';
import { NavController, ToastController} from '@ionic/angular';

import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user_name: string;
  user_password: string;
  usertype:string='';

  passwordType:string='password';
  passwordShown:boolean=false;

  constructor(public navCtrl:NavController,public toastCtrl:ToastController,private router: Router,private http: HttpClient) { }

  
 

  logIn() {
    
    
    let postData = {
            "email": this.user_name,
            "password": this.user_password
    }

    this.http.post('http://localhost:8000/api/login', postData).subscribe((response) => {
      console.log(response);
      var userType=JSON.stringify(response['userType']);
      var type=JSON.parse(userType);


      var user=JSON.stringify(response['authUser']);
      var authUser=JSON.parse(user);
      let navigationExtras:NavigationExtras={
       state:{
         userType:type,
         authUser:authUser
       }
      }
      this.router.navigate(['home'],navigationExtras);

    }, error => {
      console.log(error);
      /*if(JSON.stringify(response['one']) == '"Doten"') {
        this.jsondata = 'Login Success';
      }*/
    });
    
    /*if(this.user_name!="doten") {
    
      const toast= await this.toastCtrl.create({
        message:"You have enter invalid user name",
        duration:3000,
      });
      return await toast.present();
    
    }
    
    else if(this.user_password!="doten") {
    
      const toast= await this.toastCtrl.create({
        message:"You have enter invalid password",
        duration:3000,
      });
      return await toast.present();
    } else {
      this.navCtrl.navigateForward('/home');
    } */ 
  }

  register() {
    this.navCtrl.navigateForward('/register');
  }




  public togglePassword(){

    if(this.passwordShown){
      this.passwordShown=false;
      this.passwordType='password';
    }
    else{
      this.passwordShown=true;
      this.passwordType='text';
      
    }

  }

  ngOnInit() {
  }

}
