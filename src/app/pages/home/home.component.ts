import { Component, OnInit } from '@angular/core';
import { ApiCategoriesService } from '../../services/api-categories.service';
import { Category } from '../../../types/category.type';
import { ApiProductsService } from '../../services/api-products.service';
import { Product } from '../../../types/product.type';
import { BreakpointsScreenService } from '../../services/breakpoints-screen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public allCategories: Category[] = [];
  public allProducts: Product[] = [];
  public eletronicProducts: Product[] = [];
  public quantityProducts: number = 0;

  constructor(
    private apiCategoriesService: ApiCategoriesService,
    private apiProductsService: ApiProductsService,
    private breakpointsScreenService: BreakpointsScreenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
    this.getEletronicProducts();
    this.setQuantityProducts();
  }

  public loadMore(): void {
    const screenSize = this.breakpointsScreenService.screenSize;

    switch (screenSize) {
      case '(min-width: 1920px)':
      case '(min-width: 1280px) and (max-width: 1919.98px)': {
        this.quantityProducts += 8;
        break;
      }
      case '(min-width: 600px) and (max-width: 959.98px)':
      case '(min-width: 960px) and (max-width: 1279.98px)': {
        this.quantityProducts += 6;
        break;
      }
      case '(max-width: 599.98px)': {
        this.quantityProducts += 4;
        break;
      }
      default: {
        this.quantityProducts = 0;
      }
    }
  }

  public selectCategory(category: Category): void {
    this.router.navigate(['/category', category]);
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

  private getEletronicProducts(): void {
    this.apiCategoriesService.getCategory('electronics').subscribe({
      next: (response) => {
        this.eletronicProducts = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  private setQuantityProducts(): void {
    const screenSize = this.breakpointsScreenService.screenSize;

    switch (screenSize) {
      case '(min-width: 1920px)':
      case '(min-width: 1280px) and (max-width: 1919.98px)': {
        this.quantityProducts = 8;
        break;
      }
      default: {
        this.quantityProducts = 6;
      }
    }
  }
}
