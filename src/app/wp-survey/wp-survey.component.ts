import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router  , ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';


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
    console.log(tempForm);
  }
  constructor(private fb:FormBuilder, private route: ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
   
    this.surveyForm = this.fb.group({
      yearsWorked:[''],
      referSomeone:[''],
      bestWorking: this.createItem(),
      additionalInfo:[''],
      happyAtWork:['']


    })
    console.log(this.route.snapshot.params['id']);
    if(this.route.snapshot.params['id'] == 'edit'){

      this.http.get('./assets/surveyDetails.json').subscribe(data => {
        this.surveyForm.setValue(data);
       });
    }
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