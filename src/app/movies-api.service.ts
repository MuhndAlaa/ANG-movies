import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesAPIService {

  constructor(private _httpClient:HttpClient) { }

  getTrendingMovies(categeory:string):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/${categeory}/day?api_key=428738f72b78f80e7d92b4fcfe26ee94`)
  }

  getNowPlayingMovies(page:Number):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=428738f72b78f80e7d92b4fcfe26ee94&language=en-US&page=${page}`)
  }


  getNowPlayingSeries(page:Number):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=428738f72b78f80e7d92b4fcfe26ee94&language=en-US&page=${page}`)
  }

  getMovieDetails(id:Number):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=428738f72b78f80e7d92b4fcfe26ee94`)
  }

  getTvDetails(id:Number):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=428738f72b78f80e7d92b4fcfe26ee94`)
  }

}

