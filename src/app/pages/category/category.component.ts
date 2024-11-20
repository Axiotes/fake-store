import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../types/product.type';
import { ApiCategoriesService } from '../../services/api-categories.service';
import { Category } from '../../../types/category.type';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
  public products: Product[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private apiCategoriesService: ApiCategoriesService
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      const category = params.get('category') as Category;
      this.getProductsCategory(category);
    });
  }

  private getProductsCategory(category: Category): void {
    this.apiCategoriesService.getCategory(category).subscribe((products) => {
      this.products = products;
    });
  }
}
