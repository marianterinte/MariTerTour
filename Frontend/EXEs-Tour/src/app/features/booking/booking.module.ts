import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingMainComponent } from './booking-main/booking-main.component';
import { AvailableVacationsComponent } from './available-vacations/available-vacations.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { VacationDetailComponent } from './vacation-detail/vacation-detail.component';
import { BookingRoutingModule } from './booking-routing.module.';
import { BookingService } from './booking.service';

@NgModule({
  declarations: [
    BookingMainComponent,
    AvailableVacationsComponent,
    CreateBookingComponent,
    VacationDetailComponent
  ],
  imports: [CommonModule, BookingRoutingModule],
  providers: [BookingService]
})
export class BookingModule {}
