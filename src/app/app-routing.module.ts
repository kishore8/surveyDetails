import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveylistComponent } from './surveylist/surveylist.component';
import { WpSurveyComponent } from './wp-survey/wp-survey.component';

const routes: Routes = [ { path: '', component: SurveylistComponent },
{ path: 'wpSurvey/:id', component: WpSurveyComponent }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
