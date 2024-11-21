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
  public favorited!: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiProductsService: ApiProductsService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id') as string;
      this.getProduct(id);
      this.verifyFavorite(Number(id));
    });
  }

  public favoriteProduct(): void {
    if (this.favorited) {
      this.storageService.removeItem('favorites', this.product);
      this.favorited = false;
      return;
    }

    this.storageService.addItem('favorites', this.product);
    this.favorited = true;
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

  private verifyFavorite(id: number): void {
    this.favorited = this.storageService.verifyItemExist('favorites', id);
  }
}
