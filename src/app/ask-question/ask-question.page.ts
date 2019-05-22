import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.page.html',
  styleUrls: ['./ask-question.page.scss'],
})
export class AskQuestionPage implements OnInit {

  question='';
  description='';
  username=''
  items=[];
  authUser:string;

  constructor(private http:HttpClient,private navCtrl:NavController,private route:ActivatedRoute,private router:Router) { 
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.authUser=this.router.getCurrentNavigation().extras.state.authUser;
       
      }
      var authuser=window.localStorage.setItem('user',this.authUser);
    });

    this.getAnswer();
  }

  Query(){
    var authUser=window.localStorage.getItem('user');
    let data={
      "question":this.question,
      "description":this.description,
      "authUser":authUser
    }

    this.http.post('http://localhost:8000/api/addquestion',data).subscribe((response)=>{
      console.log(response);
      this.navCtrl.navigateForward('/home');
    })
  }


  getAnswer(){
    var authUser=window.localStorage.getItem('user');
    let data={
      "authUser":authUser
    }
    this.http.post('http://localhost:8000/api/getanswer',data).subscribe((data:any)=>{
      this.items=data;
    });
  }

  ngOnInit() {
  }

}
