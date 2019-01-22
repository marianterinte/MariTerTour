import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EXE`s Tour';
  isAuthenticated: boolean;
  navLinks: any;

  ngOnInit(): void {
    this.navLinks = [
      { path: 'home', label: 'Home' },
      { path: 'booking', label: 'Book A Vacation' },
      { path: 'contact', label: 'Contact Us' }

    ];
  }

  onLoginClick() {}
}
