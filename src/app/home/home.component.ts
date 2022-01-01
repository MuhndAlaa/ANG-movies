import { Component, OnInit ,OnDestroy } from '@angular/core';
import { MoviesAPIService } from '../movies-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {
  channelOne: any;
  channelTwo: any;
  moviesData:any;
  tvData:any;
  imgBaseURL:any = "https://image.tmdb.org/t/p/w500";

  constructor(private _moviesAPI:MoviesAPIService) {}

  ngOnInit(): void {
    this.channelOne =  this._moviesAPI.getTrendingMovies("movie").subscribe(
      (data:any) => { this.moviesData = data.results.slice(0,10)});

    this.channelTwo =  this._moviesAPI.getTrendingMovies("tv").subscribe(
      (data:any) => { this.tvData = data.results.slice(0,10)});
  }

  ngOnDestroy():void{
    this.channelOne.unsubscribe();
    this.channelTwo.unsubscribe();
  }

}
