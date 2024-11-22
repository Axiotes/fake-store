import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Product } from '../../../types/product.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  public products: Product[] = [];

  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit(): void {
    const value = this.storageService.getItem('favorites');

    if (value) {
      this.products = value.products;
    }
  }

  public selectedProduct(id: number): void {
    this.router.navigate(['/details', id]);
  }
}
