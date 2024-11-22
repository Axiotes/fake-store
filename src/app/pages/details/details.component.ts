import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProductsService } from '../../services/api-products.service';
import { Product } from '../../../types/product.type';
import { LucideIconData } from 'lucide-angular/icons/types';
import { Heart, ShoppingBasket, ShoppingCart } from 'lucide-angular';
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
  public shoppingBasket: LucideIconData = ShoppingBasket;
  public favorited!: boolean;
  public inCart!: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiProductsService: ApiProductsService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id') as string;
      this.getProduct(id);
      this.verifyFavorite(Number(id));
      this.verifyCart(Number(id));
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

  public addToCart(): void {
    if (this.inCart) {
      this.storageService.removeItem('cart', this.product);
      this.inCart = false;
      return;
    }

    const product = this.parseToProduct(this.product, 1);
    this.storageService.addItem('cart', product);
    this.inCart = true;
  }

  public buyNow(): void {
    if (!this.inCart) {
      const product = this.parseToProduct(this.product, 1);
      this.storageService.addItem('cart', product);
      this.inCart = true;
    }

    this.router.navigate(['/cart']);
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

  private verifyCart(id: number): void {
    this.inCart = this.storageService.verifyItemExist('cart', id);
  }

  private parseToProduct(product: Product, quantity: number): Product {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rating: product.rating,
      quantity: quantity,
    } as Product;
  }
}
