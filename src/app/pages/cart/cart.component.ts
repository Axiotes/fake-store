import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Product } from '../../../types/product.type';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  public products: Product[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    const value = this.storageService.getItem('favorites');

    if (value) {
      this.products = value.products;
    }
  }
}
