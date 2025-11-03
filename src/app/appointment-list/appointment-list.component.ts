import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle = '';
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  ngOnInit(): void {
    this.appointments = localStorage.getItem('appointments')
      ? JSON.parse(localStorage.getItem('appointments')!)
      : [];
  }

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      this.appointments.push({
        id: new Date().getTime(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      });
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();

      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(id: number) {
    this.appointments = this.appointments.filter(
      (appointment) => appointment.id !== id
    );
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
