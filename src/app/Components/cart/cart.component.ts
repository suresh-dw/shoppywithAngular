import { Component, OnInit } from '@angular/core';
import { ProductSchema } from '../../productsSchema';
import { ProductsDataService } from '../../products-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  constructor(private cart: ProductsDataService, private router: Router) {}

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if (token) {
      this.cart.getCart().subscribe((data) => {
        console.log(data);
      });
    } else {
      this.router.navigate(['']);
    }
  }
}
