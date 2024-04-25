import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('sdjhbfa');
    } else {
    }
  }
}
