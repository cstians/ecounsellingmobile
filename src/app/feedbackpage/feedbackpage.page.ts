import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { async } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedbackpage',
  templateUrl: './feedbackpage.page.html',
  styleUrls: ['./feedbackpage.page.scss'],
})
export class FeedbackpagePage implements OnInit {
  message='';

  mess='';
  constructor(private http:HttpClient,public navCtrl:NavController,private toastCtrl:ToastController,private router:Router) { }

  feedback(){

   let data={
     Message:this.message
   }
     
    this.http.post('http://localhost:8000/api/feedback',data).subscribe((response)=>{
      console.log(response);
      this.message='';
      this.ToastsMessage();
      this.router.navigateByUrl('/home');
     
    });
}
  async ToastsMessage(){
    const toast= await this.toastCtrl.create({
      message:"Successfully sent your feedback",
      duration:3000,
     
    });
  return await toast.present();
  }

  ngOnInit() {
  }

}
