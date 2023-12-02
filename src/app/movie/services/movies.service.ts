import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { environments } from 'src/environments/environments.prod';
import { Observable, tap } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';
import { MovieDetails } from '../interfaces/movieDetails.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string = environments.baseUrl;
  private apiKey:  string = environments.apiKey;
  private movieList?: Movie;

  constructor(private http: HttpClient) { }

  getMovies(search: string | null):Observable<Movie>{
    return this.http.get<Movie>(`${this.baseUrl}/?s=${search}&apikey=${this.apiKey}`)
          .pipe(
            tap(mov => this.movieList = mov)
          )
  }

  getMovieById(id: string):Observable<MovieDetails | undefined>{
    console.log('id es: ', id)
    //http://www.omdbapi.com/?i=tt0115392&type=series&apikey=abe106a9
    return this.http.get<MovieDetails>(`${this.baseUrl}?i=${id}&apikey=${this.apiKey}`)
  }

  //TODO: No lo he usado todavia.
  get currentMovie():Movie | undefined {
    return structuredClone(this.movieList)
  }

}
