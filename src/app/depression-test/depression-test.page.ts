import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depression-test',
  templateUrl: './depression-test.page.html',
  styleUrls: ['./depression-test.page.scss'],
})
export class DepressionTestPage implements OnInit {
  toggle:string='Go to Home';
  question1:string="1.Does the person has depression?";
  question:string=" "+this.question1;
  subquestion:string="1.1 Has the person had at least one of the following core symptoms of depression for at least 2 weeks?";
  question2yes:string='2. Has the person had several of the following additional symptoms for atleast 2 weeks';

  question3yes='3.Does the person have considerable difficulty with daily functioning in personal, family, social, educational, occupational or other areas?';
  questionno1='1.Depreesion is unlikely';
  questionno2='2.Depreesion is unlikely';
  questionno3='3.Depreesion is unlikely';

  question4yes='4.Are there other explanations for the symptoms?';
  subquestion4yes='4.1 IS THIS A PHYSICAL CONDITION THAT CAN RESEMBLE OR EXACERBATE DEPRESSION?. Are ther signs and symptoms suggesting anaemia, malnutrition, hypothyroidism, mood changes from substance use and medication side-effects (e.g mood changes from steroids)? ';

   

  question5yes='5.Do depressive symptoms remain after treatment?';
  question5no='6.No treatment needed';

  question6yesno='6.IS THERE A HISTORY OF MANIA? Have several of the following symptoms occured simultaneously, lasting for atleast one week and severely enough to interfere sigificantly with works and social activities or require hospitalization or confinement?';
   

  question7yes='7. DEPRESSIVE EPISODDE IN BIPOLAR DISORDER is likely';
  question7no='7. HAS THERE BEEN A MAJOR LOSS (E.G. BEREAVEMENT) WITHIN THE LAST 6 MONTHS?'
  question7noy='7.1 HAS THERE BEEN A MAJOR LOSS (E.G. BEREAVEMENT) WITHIN THE LAST 6 MONTHS?'
  protocol2='PROTOCOL 2';


  question8no='8.DEPRESSION is likely';
  question8yes='8.Are ay of the following symptoms present? (-suicidal ideation,--Beliefs of worthlessness,--Psychotic symptoms, --Talking or moving more slowly than normal )'
  protocol3='8.PROTOCOL 3';

  question9no='9.Does the person have a previous history of depression?';
  question10no='Do not manage for depression.'

  hide:string='';
  hideno:string;
  
 

  constructor(private router:Router) { }

  yes(){
    if(this.question=="1.Does the person has depression?"){
      this.question=''+this.question2yes;
      this.subquestion='';
      this.toggle='Previous Question';
      
    }
    else if(this.question==''+this.question2yes){
      this.question=''+this.question3yes;
      this.toggle='Previous Question';

    }
    else if(this.question==''+this.question3yes){
      this.question=''+this.question4yes;
      this.subquestion=''+this.subquestion4yes;
      this.toggle='Previous Question';
    }
    else if(this.question==''+this.question4yes){
      this.question=''+this.question5yes;
      this.subquestion='';
      this.toggle='Previous Question';

    }
    else if(this.question==''+this.question5yes){
      this.question=''+this.question6yesno;
      this.toggle='Previous Question';
    }
    else if(this.question==''+this.question6yesno){
      this.question=''+this.question7yes;
      this.subquestion=''+this.protocol2;
      this.toggle='Go to Home';
      this.hide='hide';
    }
    else if(this.question==''+this.question7no){
      this.question=''+this.question8yes;
      this.toggle='Previous Question';
    }

    else if(this.question=''+this.question8yes){
      this.question=''+this.question8no;
      this.toggle='Go to Home';
      this.hide='hide';
    }

    else if(this.question==''+this.question9no){
      this.question=''+this.question8no;
      this.toggle='Go to Home';
      this.hide='hide';
    }
  }



  no(){
    if(this.question==''+this.question){
      this.question=''+this.questionno1;
      this.subquestion=" ";
      this.toggle='Go to Home';
      this.hide='hide';
      this.hideno='hide';
      
    }

    else if(this.question==''+this.question2yes){
      this.question=''+this.questionno2;
      this.subquestion='';
      this.toggle='Go to Home';
      this.hide='hide';
    }

    else if(this.question==''+this.question3yes){
      this.question=''+this.questionno3;
      this.subquestion='';
      this.toggle='Go to Home';
      this.hide='hide';
    }
    else if(this.question==''+this.question4yes){
      this.question=''+this.question6yesno;
      this.subquestion='';
      this.toggle='Previous Question';
      }
      else if(this.question==''+this.question5yes){
         this.question=''+this.question5no;
         this.toggle='Go to Home';
         this.hide='hide';

      }
      else if(this.question==''+this.question6yesno){
        this.question=''+this.question7no;
        this.subquestion='';
        this.toggle='Previous Question';
      
      }
     else if(this.question==''+this.question7no){
       this.question=''+this.question8no;
       this.toggle='Go to Home';
       this.hide='hide';
     }

     else if(this.question==''+this.question8yes){
       this.question=''+this.question9no;
       this.toggle='Previous Question';
        }

    else if(this.question==''+this.question9no){
      this.question=''+this.question10no;
      this.toggle='Go to Home';
      this.hide='hide';
    }
  }

  back(){
    if(this.toggle=='Go to Home'){
      this.router.navigateByUrl('/home');
 }
    else if(this.question==''+this.question2yes || this.question==''+this.questionno1){
      this.question='1.Does the person has depression?';
      this.subquestion='1.1 Has the person had at least one of the following core symptoms of depression for at least 2 weeks?';
      this.toggle='Go to Home';
      
    }
    else if(this.question==''+this.question3yes || this.question==''+this.questionno2){
      this.question=''+this.question2yes;
      this.subquestion='';
      this.toggle='Previous Question';
    }

    else if(this.question==''+this.question4yes || this.question==''+this.questionno3){
      this.question=''+this.question3yes;
      this.subquestion='';
    }
    else if(this.question==''+this.question5yes ||this.question==''+this.question6yesno){
      this.question=''+this.question4yes;
      this.subquestion=''+this.subquestion4yes;
    }
    
    else if(this.question==''+this.question5yes){
      this.question=''+this.question4yes;
      this.subquestion=''+this.subquestion4yes;
    }
    else if(this.question==''+this.question5no){
      this.question=''+this.question5yes;
    }
    else if(this.question==''+this.question7yes || this.question==''+this.question7no){
      this.question=''+this.question6yesno;
    }

    
  }

  ngOnInit() {
  }

}
