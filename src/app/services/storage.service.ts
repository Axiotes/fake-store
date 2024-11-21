import { Injectable } from '@angular/core';
import { StorageKey } from '../../types/storage-key.type';
import { Product } from '../../types/product.type';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public setItem(key: StorageKey, product: Product): void {
    const value = this.getItem(key);
    let newValue = { products: [] as Product[] };

    if (value) {
      value.products.forEach((p) => {
        if (p.id !== product.id) {
          newValue.products.push(p);
        }
      });
    }
    newValue.products.push(product);

    localStorage.setItem(key, JSON.stringify(newValue));
  }

  public getItem(key: StorageKey): { products: Product[] } | null {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as { products: Product[] }) : null;
  }
}
