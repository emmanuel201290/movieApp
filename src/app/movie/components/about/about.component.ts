import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent {

   data: string[] = [
    'Over 150+ Streaming Platforms supported',
    'Over 25+ Genres',
    'Over 320+ languages',
    'Updated Daily',
    'Support for US and India regions',
    'Support Movies and TV shows',
    'Movie Cast details',
    'User Reviews, Movie quotes and plot summary from IMDB.com',
    'Cast Bio, Date of birth, Role, etc.',
    'URL to Streaming Platform video'
  ]

  feature: string[] = [
   'Search by IMDB ID',
   'Search by movie title',
   'Filter by Language, Genres, IMDB rating, Year of release',
  ]

}
