import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './pages/category/category.component';
import { DetailsComponent } from './pages/details/details.component';
import { PipesModule } from './pipes/pipes.module';
import { LucideAngularModule } from 'lucide-angular';
import { FavoritesComponent } from './pages/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    DetailsComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ComponentsModule,
    PipesModule,
    LucideAngularModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
