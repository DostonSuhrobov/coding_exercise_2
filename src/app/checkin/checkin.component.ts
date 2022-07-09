import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {

  appoinmentInfos: any;

  constructor( private router: Router ) { 
    this.appoinmentInfos = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.appoinmentInfos);
   }

  ngOnInit(): void {
    if(!this.appoinmentInfos){
      this.router.navigate(['/']);
    }
  }

}
