import { Component } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
   constructor(private router:Router){}


   
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


     
   
}
