import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validator, Validators } from '@angular/forms';
import { DataService } from '../service/data.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  appointmentForm: any;
  isFormValid: boolean = true;
  isAppointmentFound: boolean = false;

  constructor( private fb: FormBuilder, private dataService: DataService, private router: Router ) { 
    this.appointmentForm = this.fb.group({ 
      firstName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z]*$')],
      ],
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      dob: ['', [Validators.required]],

    })
  }



  ngOnInit(): void {}

}
