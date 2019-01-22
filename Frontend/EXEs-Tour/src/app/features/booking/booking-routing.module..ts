import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BookingMainComponent } from './booking-main/booking-main.component';
import { VacationDetailComponent } from './vacation-detail/vacation-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BookingMainComponent,
    // canActivate: [AdalGuard],
    data: {
      // redirectToLogin: true
    },
    children: [
      {
        path: '',
        redirectTo: 'booking-main',
        pathMatch: 'full'
      },
      {
        path: 'booking-main',
        component: BookingMainComponent,
        // canActivate: [AdalGuard],
        data: {
          title: 'Book a vacation'
          // redirectToLogin: true
        }
      },
      {
        path: 'vacation-detail/:id',
        component: VacationDetailComponent,
        // canActivate: [AdalGuard],
        data: {
         // id: 'id',
          // redirectToLogin: true
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule {}
