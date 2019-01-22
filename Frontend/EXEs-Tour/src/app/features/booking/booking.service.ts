import { Injectable } from '@angular/core';
import { Vacation } from './models/vacation';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() {
    }

    getAllAvailableVacations(): Vacation[] {

      // tslint:disable-next-line:quotemark
      // tslint:disable-next-line:whitespace
      const vacations = [
        new Vacation(1,'winter vacation','a test description',['1','2'],'01.05'),
        new Vacation(2,'summer vacation','a test description',['1','2'],'01.05'),
        new Vacation(3,'ideal vacation','a test description',['1','2'],'01.05')
      ];

      return vacations;

  }
}
