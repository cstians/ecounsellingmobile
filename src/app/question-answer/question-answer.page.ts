import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.page.html',
  styleUrls: ['./question-answer.page.scss'],
})
export class QuestionAnswerPage implements OnInit {
  response:string="No Answer yet";
  constructor( private router:Router) { }

  questionpage(){
    this.router.navigateByUrl('/ask-question');
  }


  ngOnInit() {
  }

}
