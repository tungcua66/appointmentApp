import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  newAppointmentTitle: string = ''
  newAppointmentDate: Date = new Date()
  appointment : Appointment = {
    id: 1,
    title: 'Playing with cat',
    date: new Date('2025-03-06')
  }
}
