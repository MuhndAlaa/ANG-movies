import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesAPIService } from '../movies-api.service';


@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {

  channelOne:any;
  seriesData:any;
  imgBaseURL:any = "https://image.tmdb.org/t/p/w500";
  p: number = 1;
  totalResults:any;

  constructor(private _moviesAPI:MoviesAPIService) { }

  ngOnInit(): void {
    this.channelOne = this._moviesAPI.getNowPlayingSeries(this.p).subscribe(
      (data) => {this.seriesData = data.results ; this.totalResults=data.total_results}
    )
  }

  ngOnDestroy():void {
    this.channelOne.unsubscribe();
  }

}
