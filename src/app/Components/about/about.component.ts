import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('dsfsd');
    } else {
      this.router.navigate(['']);
    }
  }
}
