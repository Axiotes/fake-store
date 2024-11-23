import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Product } from '../../../types/product.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  public products: Product[] = [];

  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  public multiplyValues(price: number, quantity?: number): number {
    if (!quantity) {
      return price;
    }

    return price * quantity;
  }

  public total(): number {
    let total = 0;

    this.products.forEach((product) => {
      total += this.multiplyValues(product.price, product.quantity);
    });

    return total;
  }

  public alterQuantity(id: number, value: string): void {
    this.products.map((product) => {
      if (!product.quantity) return;

      const values: { [key: string]: number } = {
        increment: 1,
        decrement: product.quantity > 1 ? -1 : 0,
      };

      if (product.id === id) {
        product.quantity += values[value];
      }
    });
  }

  public removeProduct(product: Product): void {
    this.storageService.removeItem('cart', product);
    this.getProducts();
  }

  public selectedProduct(id: number): void {
    this.router.navigate(['/details', id]);
  }

  public pay() {
    alert('Essa loja não é real, mas obrigado por tentar realizar a compra! 😊');
  }

  private getProducts(): void {
    const value = this.storageService.getItem('cart');

    if (value) {
      this.products = value.products;
    }
  }
}
