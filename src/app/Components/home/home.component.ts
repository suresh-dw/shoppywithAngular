import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../../products-data.service';
import { ProductSchema } from '../../productsSchema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public productData: ProductSchema[] = [];
  constructor(
    private productService: ProductsDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if (token) {
      this.productService.getProducts().subscribe((res) => {
        this.productData = res;
      });
    } else {
      this.router.navigate(['']);
    }
  }
}
