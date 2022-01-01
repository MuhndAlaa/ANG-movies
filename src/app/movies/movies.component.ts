import { Component, OnInit, OnDestroy, } from '@angular/core';
import { MoviesAPIService } from '../movies-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit , OnDestroy  {

  channelOne:any;
  moviesData:any;
  imgBaseURL:any = "https://image.tmdb.org/t/p/w500";
  p: number = 1;
  totalResults:any;
  
  constructor(private _moviesAPI:MoviesAPIService) { }

  ngOnInit(): void {
    this.channelOne = this._moviesAPI.getNowPlayingMovies(this.p).subscribe(
      (data) => {this.moviesData = data.results ; this.totalResults=data.total_results}
    )
  }


  ngOnDestroy():void {
    this.channelOne.unsubscribe();
  }

}
