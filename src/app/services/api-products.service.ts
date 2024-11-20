import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../types/product.type';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  private baseURL: string = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURL}/products`);
  }

  public getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseURL}/products/${id}`);
  }
}
