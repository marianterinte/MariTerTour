import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { BookingMainComponent } from './features/booking/booking-main/booking-main.component';

const routes: Route [] = [
  { path: 'home', component: HomeComponent },
  {
    path: 'booking',
    loadChildren: './features/booking/booking.module#BookingModule'
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

 }
