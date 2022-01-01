import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesAPIService } from '../movies-api.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute , private _movieAPI:MoviesAPIService) { }

  movieDetailsId:any;
  movieDetails:any;
  imgBaseURL:string = "https://image.tmdb.org/t/p/w500";

  ngOnInit(): void {
    this.movieDetailsId = this._activatedRoute.snapshot.params.movieId;
    this._movieAPI.getMovieDetails(this.movieDetailsId).subscribe(
      (data)=>{
        this.movieDetails = data;
      }
    )

  }

}
