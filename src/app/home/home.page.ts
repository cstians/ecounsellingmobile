import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';






@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items:Array<any>=[];
 
   constructor(private router:Router,private http:HttpClient){
     this.getUsers();
   }


   
     chat()
     {
       this.router.navigateByUrl('/chat');
     }

     menu(){
       this.router.navigateByUrl('/menu');
     }

     setting(){
       this.router.navigateByUrl('/chat');
     }

     notify(){
       this.router.navigateByUrl('/chat');
     }
     depression(){
       this.router.navigateByUrl('/depression-test')
     }
     questionans(){
       this.router.navigateByUrl('/question-answer')
     }

     getUsers(){
       this.http.get('http://localhost:8000/api/users').subscribe((data:any)=>{

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
