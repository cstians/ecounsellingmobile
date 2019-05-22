import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items:Array<any>=[];
  usertype:string;
  authUser:string;
  type=[];
 name:string='';
 try:string='';

 
 
   constructor(private router:Router,private http:HttpClient,private route:ActivatedRoute){
  
    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.usertype=this.router.getCurrentNavigation().extras.state.userType;
        this.authUser=this.router.getCurrentNavigation().extras.state.authUser;
        
      }
     window.localStorage.setItem('type',this.usertype);
     window.localStorage.setItem('user',this.authUser);
      });
     this.getUser();
   
    
    }

   
   
   
   
     chat()
     {
       this.router.navigateByUrl('/chat');
     }

     menu(){
       this.router.navigateByUrl('/menu');
     }

     setting(){
       this.router.navigateByUrl('/setting');
     }

     notify(){
       this.router.navigateByUrl('/home');
     }
     depression(){
       this.router.navigateByUrl('/depression-test')
     }

     questionans(){
       var authuser=window.localStorage.getItem('user');
       var user='User';
       var peer='Peer';
       
       let navigationEtras:NavigationExtras={
         state:{
           authuser:authuser

         }
       }
       var Type=window.localStorage.getItem('type');
       if(Type===''+user){
       this.router.navigate(['peer-view-questions'],navigationEtras);
       }
       else{
        this.router.navigate(['question-answer'],navigationEtras);
       }
     }

     chatHome(item){
       this.authUser=window.localStorage.getItem('user');
       let navigationEtras:NavigationExtras={
         state:{
           name:item.name,
           authUser:this.authUser
         }
       }
      
       this.router.navigate(['chatscreen'],navigationEtras);
     }

     getUser(){
       
   
    
      var typestore=window.localStorage.getItem('type');
      
    let data={
      "type":''+typestore
    };

    this.http.post('http://localhost:8000/api/getuser',data).subscribe((data:any)=>{
         
      this.items=data;
      
     });
      
      }

       getUsers(){
        var typestore=window.localStorage.getItem('type');
        let data={
          "type":''+typestore
        };
  
        this.http.post('http://localhost:8000/api/users',data).subscribe((data:any)=>{
             
          this.items=data;
          
         });
       }
     
      

     
       

     remove(item){
       for(var i=0;i<this.items.length;i++){
         if(this.items[i]==item){
          this.items.splice(i,1); 
         }
       }

     }

     
   
}
