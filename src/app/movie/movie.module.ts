import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list-page/list.component';
import { AboutComponent } from './components/about/about.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { MovieRoutingModule } from './movie-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    ListComponent,
    AboutComponent,
    LayoutPageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    ReactiveFormsModule
  ]
})
export class MovieModule { }
