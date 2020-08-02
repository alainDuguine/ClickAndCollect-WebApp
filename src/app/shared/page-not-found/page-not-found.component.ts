import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  isAuthenticated: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthenticated = !!this.authService.currentUserValue;
  }

}
