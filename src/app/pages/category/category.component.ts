import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public category!: Category;

  constructor(
    private activeRoute: ActivatedRoute,
    private apiCategoriesService: ApiCategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.category = params.get('category') as Category;
      this.getProductsCategory(this.category);
    });
  }

  public selectedProduct(id: number): void {
    this.router.navigate(['/details', id]);
  }

  private getProductsCategory(category: Category): void {
    this.apiCategoriesService.getCategory(category).subscribe((products) => {
      this.products = products;
    });
  }
}
