import { Component, Input } from '@angular/core';
import { Movie, Search } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent {

  @Input()
  public search!: Search;

}
