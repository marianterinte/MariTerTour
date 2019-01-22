import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  Router,
  RoutesRecognized,
  NavigationEnd
} from "@angular/router";
import { BookingService } from "../booking.service";
import { filter } from 'rxjs/operators';

@Component({
  selector: "app-vacation-detail",
  templateUrl: "./vacation-detail.component.html",
  styleUrls: ["./vacation-detail.component.scss"]
})
export class VacationDetailComponent implements OnInit {
  id: string;
  private sub: any;
  sharedData:any;
  subData:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    bookingService: BookingService
  )
  {}

  ngOnInit() {
       //this.id=this.activatedRoute.firstChild.url.value[1]["path"];
       //console.log('id = '+this.id);
}

}
