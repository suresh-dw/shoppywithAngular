import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../../products-data.service';
import { UserSchema } from '../../UserSchema';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  public login = new FormGroup({
    username: new FormControl('mor_2314'),
    password: new FormControl('83r5^_'),
  });
  constructor(
    private loginService: ProductsDataService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['home']);
    }
  }
  onLogin() {
    let loginData: UserSchema = {
      username: this.login.value.username,
      password: this.login.value.password,
    };
    this.loginService.login(loginData).subscribe((data) => {
      this.loginService.setToken(data.token);
      if (data.token) {
        this.router.navigate(['home']);
      }
      console.log(data);
    });
  }
}
