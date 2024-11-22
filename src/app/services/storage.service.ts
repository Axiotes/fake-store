import { Injectable } from '@angular/core';
import { StorageKey } from '../../types/storage-key.type';
import { Product } from '../../types/product.type';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public getItem(key: StorageKey): { products: Product[] } | null {
    if (
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined' &&
      typeof localStorage !== 'undefined'
    ) {
      const value = localStorage.getItem(key);
      return value ? (JSON.parse(value) as { products: Product[] }) : null;
    }

    return null;
  }

  public addItem(key: StorageKey, product: Product): void {
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

  public verifyItemExist(key: StorageKey, id: number): boolean {
    const value = this.getItem(key);

    if (value) {
      for (const p of value.products) {
        if (p.id === id) {
          return true;
        }
      }
    }

    return false;
  }

  public removeItem(key: StorageKey, product: Product): void {
    const value = this.getItem(key);

    if (value) {
      const newValue = { products: [] as Product[] };

      value.products.forEach((p) => {
        if (p.id !== product.id) {
          newValue.products.push(p);
        }
      });

      localStorage.setItem(key, JSON.stringify(newValue));
    }
  }
}
