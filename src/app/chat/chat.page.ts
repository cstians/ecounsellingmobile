import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
 socket:any;
name='dorji'
  constructor() { 
    this.socket=io('http://localhost:2000');
  }

  add(){
    let data={
      name:''+name
    }

    this.socket('add',data);
  }

  ngOnInit() {
  }

}
