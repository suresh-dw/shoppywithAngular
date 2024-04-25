import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from './products-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'shoppy';
  isLoggedin = false;
  constructor() {}
  ngOnInit() {}
}
