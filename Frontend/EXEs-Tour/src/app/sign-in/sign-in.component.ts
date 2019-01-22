import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {

  }


  onSignInClick(){

     this.dialog.open(LoginComponent, {
      height: '400px',
      width: '600px',
    });

  }

}
