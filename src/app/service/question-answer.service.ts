import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getInheritedFactory } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class QuestionAnswerService {

  constructor(private http:HttpClient) { 
  }
}
