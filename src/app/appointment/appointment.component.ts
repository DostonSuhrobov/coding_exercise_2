import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service'; 

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  appointmentForm: any;
  isFormValid: boolean = true;
  isAppointmentFound: boolean = false;

  constructor( private fb: FormBuilder, private dataService: DataService ) { 
    this.appointmentForm = this.fb.group({ 
      firstName: [ '', [Validators.required, Validators.pattern('^[a-zA-Z]*$')] ],
      lastname: [ '', [Validators.required, Validators.pattern('^[a-zA-Z]*$')] ],
      dob: [ '', [Validators.required] ]
    })
  }

  get dob(){
    return this.appointmentForm.get('dob');
  }

  get firstname() {
    return this.appointmentForm.get('firstname');
  }

  get lastname() {
    return this.appointmentForm.get('lastname');
  }

  ngOnInit(): void {}

  onSubmit() {
    this.isAppointmentFound = false;
    this.verifyFormValidity();
    let findAppointment;
    if(!this.isFormValid) return;
    if(this.isFormValid){
      findAppointment = this.dataService.mockData.find(
        apt => 
           apt.firstName.toLowerCase() === this.firstname.value.toLowerCase() && 
           apt.lastName.toLowerCase() === this.lastname.value.toLowerCase()
      );
    }
  }

  verifyFormValidity() {
    return ( this.isFormValid = this.dob.valid && this.firstname.valid && this.lastname.valid );
  }

}
