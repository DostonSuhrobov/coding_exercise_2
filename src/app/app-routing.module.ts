import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { CheckinComponent } from './checkin/checkin.component';


const routes: Routes = [
  { path: 'appointment', component: AppointmentComponent },
  { path: 'checkin', component: CheckinComponent },
  { path: '', redirectTo: 'appointment', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
