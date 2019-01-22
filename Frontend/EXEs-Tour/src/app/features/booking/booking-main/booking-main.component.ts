import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking-main',
  templateUrl: './booking-main.component.html',
  styleUrls: ['./booking-main.component.scss']
})
export class BookingMainComponent implements OnInit {
  currentRoute:string;

  constructor(private router:Router) {
    this.currentRoute=this.router.url;
   }

  ngOnInit()
   {
    this.router.events.subscribe((val) => {
      this.currentRoute=this.router.url;
    });
  }

}
