import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-surveylist',
  templateUrl: './surveylist.component.html',
  styleUrls: ['./surveylist.component.css']
})
export class SurveylistComponent implements OnInit {
  surveyList:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('./assets/list.json').subscribe(data => {
             this.surveyList = data;
            });
  }

}
