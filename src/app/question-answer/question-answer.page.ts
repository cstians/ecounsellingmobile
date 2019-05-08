import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-question-answer',
  
  templateUrl: './question-answer.page.html',
  styleUrls: ['./question-answer.page.scss'],
})
export class QuestionAnswerPage implements OnInit {
  public items:Array<any>=[];
  item='';
  constructor( private router:Router,private http:HttpClient) { 

 this.getanswer();
  }

  questionpage(){
   this.router.navigateByUrl('/ask-question');
  }

  getanswer(){
    this.http.get('http://localhost:8000/api/getquestion').subscribe((data:any)=>{
       this.items=data;
    });
     
    



  }

  
    
  


  ngOnInit() {
  }

}
