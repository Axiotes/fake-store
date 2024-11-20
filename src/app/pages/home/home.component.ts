import { Component, OnInit } from '@angular/core';
import { ApiCategoriesService } from '../../services/api-categories.service';
import { Category } from '../../../types/category.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public allCategories!: Category[];

  constructor(private apiCategoriesService: ApiCategoriesService) {}

  ngOnInit(): void {
    this.apiCategoriesService.getCategories().subscribe({
      next: (response) => {
        this.allCategories = response;
        console.log(this.allCategories);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
