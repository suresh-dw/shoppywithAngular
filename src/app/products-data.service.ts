import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductSchema } from './productsSchema';
import { UserSchema } from './UserSchema';

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  public cartData: ProductSchema[] = [];
  constructor(private http: HttpClient) {}
  getProducts(): Observable<ProductSchema[]> {
    return this.http.get<ProductSchema[]>('https://fakestoreapi.com/products');
  }

  login(data: UserSchema): Observable<any> {
    const url = 'https://fakestoreapi.com/auth/login';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(url, data, { headers });
  }

  setToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  addToCart(product: ProductSchema) {
    this.cartData.push(product);
    console.log(this.cartData);
  }

  deleteFromCart(product: ProductSchema) {}
}
