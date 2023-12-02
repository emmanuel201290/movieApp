import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { MovieDetails } from '../../interfaces/movieDetails.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: [
    './details.component.css'
  ]
})
export class DetailsComponent implements OnInit {

  public movieDetails?:MovieDetails;

  constructor(
    private movieService: MoviesService,
    private activateRouter: ActivatedRoute){}

  ngOnInit(): void {
    this.activateRouter.params
        .pipe(
           switchMap(({id})=> this.movieService.getMovieById(id)),
        ).subscribe(movie=>{
          this.movieDetails = movie;
          let id: string = movie ? movie.Title : '';
           console.log(movie)
        })
    }
}
