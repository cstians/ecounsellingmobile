import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Params } from '@angular/router'






@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items:Array<any>=[];
  usertype:string;
  type=[];
 name:string='';
 
 
   constructor(private router:Router,private http:HttpClient,private route:ActivatedRoute){

    this.route.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.usertype=this.router.getCurrentNavigation().extras.state.userType;
        
      }

      window.localStorage.setItem('type',this.usertype);
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
       this.router.navigateByUrl('/home');
     }

     notify(){
       this.router.navigateByUrl('/home');
     }
     depression(){
       this.router.navigateByUrl('/depression-test')
     }
     questionans(){
       this.router.navigateByUrl('/question-answer')
     }

     chatHome(item){
       let navigationEtras:NavigationExtras={
         state:{
           name:item.name
         }
       }
       this.router.navigate(['chatscreen'],navigationEtras);
     }

     getUser(){
      var typestore=window.localStorage.getItem('type');
      let data={
        "type":''+typestore
      };

      this.http.post('http://localhost:8000/api/users',data).subscribe((data:any)=>{
           
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
