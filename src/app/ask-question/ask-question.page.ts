import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

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

  constructor(private http:HttpClient,private navCtrl:NavController) { 
    this.getAnswer();
  }

  Query(){
    let data={
      question:this.question,
      description:this.description,
      username:'Doten'
    }

    this.http.post('http://localhost:8000/api/addquestion',data).subscribe((response)=>{
      console.log(response);
      this.navCtrl.navigateForward('/home');
    })
  }


  getAnswer(){
    this.http.get('http://localhost:8000/api/getanswer').subscribe((data:any)=>{
      this.items=data;
    });
  }

  ngOnInit() {
  }

}
