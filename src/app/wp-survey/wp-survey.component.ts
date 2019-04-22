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
      bestWorking: this.createItem(),
      additionalInfo:[''],
      happyAtWork:['']


    })

    this.surveyForm.controls.bestWorking.valueChanges.subscribe((val) =>{
  });
  }
  getKey(formCon){
    return Object.keys(formCon.controls)[0];
  }
  createItem() {
  
    let formArr = this.fb.array([]);
    for(let option of this.options){
      let controlVals = option.value 
      const valFormGroup = new FormGroup({});
      const control: FormControl = new FormControl();
      valFormGroup.addControl(controlVals, control);
      formArr.push(valFormGroup);
    }
    return formArr;
  }

  createFormControl(){
    
  }
}