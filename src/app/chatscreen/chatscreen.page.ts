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
  authName:string;
  username:string='';
  sender:string='';
  user='';


  constructor(public navCtrl: NavController, public toastCtrl:ToastController,private route:ActivatedRoute,private router:Router) {
    this.socket = io('http://localhost:3000');
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

    
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.name=this.router.getCurrentNavigation().extras.state.name;
        this.authName=this.router.getCurrentNavigation().extras.state.authUser;
      }
      //this.username=''+this.name;
      //this.sender=''+this.authName;
      this.user=''+this.authName;
      window.localStorage.setItem('sender',this.authName);
      window.localStorage.setItem('reciever',this.name);

      

    });
  
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }


  //ionViewWillLeave() {
    //this.socket.disconnect();
  //}
    
  send(msg) {
    if(msg !=''){
      
    this.sender=window.localStorage.getItem('sender');
    this.name=window.localStorage.getItem('reciever');
    
    let data={
      message:this.chat_input,
      sender:this.sender,
      reciever:this.name
    }

    this.socket.emit('message',data);
    
    this.chat_input ='';
  }
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