import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-feedbackpage',
  templateUrl: './feedbackpage.page.html',
  styleUrls: ['./feedbackpage.page.scss'],
})
export class FeedbackpagePage implements OnInit {
  message='';

  mess='';
  constructor(private http:HttpClient,public navCtrl:NavController) { }

  feedback(){

   let data={
     Message:this.message
   }
      var Message=''+this.message;
      this.mess=''+Message;
    this.http.post('http://localhost:8000/api/feedback',data).subscribe((response)=>{
      console.log(response);
      this.navCtrl.navigateForward('/home');
    });

    

  }

  ngOnInit() {
  }

}
