import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.page.html',
  styleUrls: ['./ask-question.page.scss'],
})
export class AskQuestionPage implements OnInit {

  question:string='';
  description:string='';

  constructor() { }

  ngOnInit() {
  }

}
