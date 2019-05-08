import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chatscreen',
  templateUrl: './chatscreen.page.html',
  styleUrls: ['./chatscreen.page.scss'],
})
export class ChatscreenPage implements OnInit {

  socket: any;
  chat_input: string;
  chats = [];
  messages = [];
  nickname = '';
  message = '';
  name:string;
  username:string='';

  constructor(public navCtrl: NavController, public toastCtrl:ToastController,private route:ActivatedRoute,private router:Router) {

    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.name=this.router.getCurrentNavigation().extras.state.name;
        
      }
      this.username=''+this.name;

      
      });


    this.socket = io('http://10.2.2.214:3000');
    this.socket.on('message', (msg) => {
      console.log("message", msg);
      this.chats.push(msg);
    });

    this.getMessages().subscribe(message => {
      this.messages.push(message);
    });

    this.getUsers().subscribe(data => {
      let user = data['user'];
    });
  
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }
    
  send(msg) {
    if(msg !=''){
    this.socket.emit('message', msg);
    }
    this.chat_input ='';
  }
    
  getMessages() {
    let observable =new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
    }); //try semi colon here
    
    return observable;
    
  }
    
  getUsers() {
    let observable =new Observable(observer => {
      this.socket.on('users-changed', (data) => {
      observer.next(data);
      });
    });
    
    return observable;
    
  }
    

  ngOnInit() {
  }

}
