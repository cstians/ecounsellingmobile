import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
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
  authuser:string;
  constructor( private router:Router,private http:HttpClient,private route:ActivatedRoute) { 
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.authuser=this.router.getCurrentNavigation().extras.state.authuser;
       
      }
      var authuser=window.localStorage.setItem('user',this.authuser);
    });

 this.getanswer();
  }

  questionpage(){
    var authUser=window.localStorage.getItem('user');
    let navigationExtras:NavigationExtras={
      state:{
        authUser:authUser
      }
    }
   this.router.navigate(['ask-question'],navigationExtras);
  }

  getanswer(){
    var authUser=window.localStorage.getItem('user');
    let data={
      "authUser":authUser
    }
    this.http.post('http://localhost:8000/api/getquestions',data).subscribe((data:any)=>{
       this.items=data;
    });
     
    



  }

  
    
  


  ngOnInit() {
  }

}
