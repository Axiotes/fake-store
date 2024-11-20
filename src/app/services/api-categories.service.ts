import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../types/category.type';
import { Product } from '../../types/product.type';

@Injectable({
  providedIn: 'root',
})
export class ApiCategoriesService {
  private baseURL: string = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  public getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseURL}/products/categories`);
  }

  public getCategory(category: Category): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.baseURL}/products/category/${category}`
    );
  }
}
