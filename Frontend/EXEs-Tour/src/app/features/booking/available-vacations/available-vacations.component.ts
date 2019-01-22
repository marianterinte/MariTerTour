import { Component, OnInit } from "@angular/core";
import { BookingService } from "../booking.service";
import { Vacation } from "../models/vacation";

@Component({
  selector: "app-available-vacations",
  templateUrl: "./available-vacations.component.html",
  styleUrls: ['./available-vacations.component.scss']
})
export class AvailableVacationsComponent implements OnInit {
  vacations: Vacation[];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.vacations = this.bookingService.getAllAvailableVacations();
  }
}
