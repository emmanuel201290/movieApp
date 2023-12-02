import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/movie.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: [
    "./layout-component.css"
  ]
})
export class LayoutPageComponent implements OnInit {


  ngOnInit(): void {

  }


}
