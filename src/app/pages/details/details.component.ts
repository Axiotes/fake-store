import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiProductsService } from '../../services/api-products.service';
import { Product } from '../../../types/product.type';
import { LucideIconData } from 'lucide-angular/icons/types';
import { Heart, ShoppingCart } from 'lucide-angular';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  public product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: 'electronics',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  };
  public shoppingCart: LucideIconData = ShoppingCart;
  public heart: LucideIconData = Heart;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiProductsService: ApiProductsService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id') as string;
      this.getProduct(id);
    });
  }

  public favoriteProduct(): void {
    console.log('Favorite product');
    this.storageService.setItem('favorites', this.product);
  }

  private getProduct(id: string): void {
    this.apiProductsService.getProduct(id).subscribe({
      next: (product) => {
        this.product = product;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
