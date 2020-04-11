import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


// containers

import { PassengerDashboardComponent } from './containers/passenger-dashboard/passanger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

//  components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

// service
import { PassengerDashboardService } from './models/passenger-dashbaord.service';

const routes : Routes = [
  {
    path: 'passengers',
    children : [
      { path: '',  component : PassengerDashboardComponent },
      { path: ':id', component: PassengerViewerComponent }
    ]
  }
];

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    // components
    PassengerDetailComponent,
    PassengerCountComponent,
    PassengerFormComponent

  ],
  imports:[
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {}
