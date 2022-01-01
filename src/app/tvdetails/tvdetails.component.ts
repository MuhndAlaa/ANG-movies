import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesAPIService } from '../movies-api.service';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute , private _movieAPI:MoviesAPIService) { }

  tvDetailsId:any;
  tvDetails:any;
  imgBaseURL:any = "https://image.tmdb.org/t/p/w500";

  ngOnInit(): void {
    this.tvDetailsId = this._activatedRoute.snapshot.params.serieId;
    this._movieAPI.getTvDetails(this.tvDetailsId).subscribe(
      (data)=>{
        this.tvDetails = data;
      }
    )
  }

}
