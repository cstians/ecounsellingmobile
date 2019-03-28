import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.page.html',
  styleUrls: ['./question-answer.page.scss'],
})
export class QuestionAnswerPage implements OnInit {
  response:string="No Answer yet";
  constructor() { }


  ngOnInit() {
  }

}
