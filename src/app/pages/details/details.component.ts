import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiProductsService } from '../../services/api-products.service';
import { Product } from '../../../types/product.type';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  public product!: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiProductsService: ApiProductsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id') as string;
      this.getProduct(id);
    });
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
