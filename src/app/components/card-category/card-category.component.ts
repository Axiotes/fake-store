import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrl: './card-category.component.scss'
})
export class CardCategoryComponent {
  @Input({ required: true })
  public category!: string
}
