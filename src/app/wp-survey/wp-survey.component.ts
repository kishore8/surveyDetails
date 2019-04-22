import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-wp-survey',
  templateUrl: './wp-survey.component.html',
  styleUrls: ['./wp-survey.component.css']
})
export class WpSurveyComponent implements OnInit {
  surveyForm:FormGroup;
  options=[
    {name:'Management', value:"Management", checked:false},
    {name:'Work Area', value:'Workarea', checked:false},
    {name:'Hikes', value:'hikes', checked:false},
    {name:'HR Policies', value:'HrPolicies', checked:false}
  ];
  get selectedOptions() {
    return this.options
              .filter(opt => opt.checked)
              .map(opt => opt.value)
  }

  submit(eve,tempForm){
    
  }
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
   
    this.surveyForm = this.fb.group({
      yearsWorked:[''],
      referSomeone:[''],
      bestWorking:[''],
      additionalInfo:[''],
      happyAtWork:['']


    })

    this.surveyForm.controls.bestWorking.valueChanges.subscribe((val) =>{
  });
  }

}