import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';
import { Movie, Search } from '../../interfaces/movie.interface';
import { delay, finalize, tap } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.css']
})
export class ListComponent implements OnInit {

  public movies!: Movie ;
  public flgLoading: boolean = false;
  public mov!: Search;

  public myForm: FormGroup = this.fb.group({
    search: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, private moviesService: MoviesService){}
  ngOnInit(): void {
    console.log('aqui estamos: ', localStorage.getItem('imdbID'))
    this.flgLoading = true;
    const imdbID:string | null = localStorage.getItem('imdbID')===null ? '' : localStorage.getItem('imdbID')
      this.moviesService.getMovies(imdbID)
      .pipe(
        finalize(()=>{
        this.flgLoading = false;
      }),
      )
      .subscribe(m=>{this.movies=m});
  }

  onSubmit(){
      localStorage.setItem('imdbID', this.myForm.controls['search'].value);
      this.flgLoading = true;
      this.moviesService.getMovies(this.myForm.controls['search'].value)
      .pipe(
        finalize(()=>{
        this.flgLoading = false;
      }),
      )
      .subscribe(m=>{this.movies=m});
  }
}
