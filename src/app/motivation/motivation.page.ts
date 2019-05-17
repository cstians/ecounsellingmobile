import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.page.html',
  styleUrls: ['./motivation.page.scss'],
})
export class MotivationPage implements OnInit {
  items=[];

  constructor(private http:HttpClient) { 
    this.getlink();
  }

  getlink(){

    this.http.get('http://localhost:8000/api/getlink').subscribe((data:any)=>{
      this.items=data;
    })

  }

  ngOnInit() {
  }

}
