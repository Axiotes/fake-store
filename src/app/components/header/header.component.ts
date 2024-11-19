import { Component } from '@angular/core';
import { Heart, ShoppingCart } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public shoppingCart: LucideIconData = ShoppingCart;
  public heart: LucideIconData = Heart;
}
