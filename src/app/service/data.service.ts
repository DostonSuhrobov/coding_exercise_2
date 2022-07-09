import { Injectable } from '@angular/core';
import { AppointmentDetails } from '../interface/appointment.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  mockData: AppointmentDetails[] = [
    {
      address: 'Philadelphia, PA',
      appointmentDateTime: '07/08/2022',
      firstName: 'Doston',
      lastName: 'Suhrobov'
    },
    {
      address: 'Brooklyn, NY',
      appointmentDateTime: '07/07/2022',
      firstName: 'Dilorom',
      lastName: 'Alieva'
    }
  ]

  constructor() { }
}
