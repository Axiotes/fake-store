import { Component, OnInit } from '@angular/core';
import { ApiCategoriesService } from '../../services/api-categories.service';
import { Category } from '../../../types/category.type';
import { ApiProductsService } from '../../services/api-products.service';
import { Product } from '../../../types/product.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public allCategories!: Category[];
  public allProducts!: Product[];

  constructor(
    private apiCategoriesService: ApiCategoriesService,
    private apiProductsService: ApiProductsService
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
  }

  private getAllCategories(): void {
    this.apiCategoriesService.getAllCategories().subscribe({
      next: (response) => {
        this.allCategories = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  private getAllProducts(): void {
    this.apiProductsService.getAllProducts().subscribe({
      next: (response) => {
        this.allProducts = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
