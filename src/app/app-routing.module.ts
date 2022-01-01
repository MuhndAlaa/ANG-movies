import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home", canActivate:[AuthGuard], component:HomeComponent},
  {path:"movies", canActivate:[AuthGuard], component:MoviesComponent},
  {path:"tv-shows", canActivate:[AuthGuard],component:TvShowsComponent},
  {path:"moviedetails/:movieId", canActivate:[AuthGuard], component:MoviedetailsComponent},
  {path:"tvdetails/:serieId", canActivate:[AuthGuard], component:TvdetailsComponent},
  {path:"about", canActivate:[AuthGuard], component:AboutComponent},
  {path:"contact", canActivate:[AuthGuard], component:ContactComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"notfound", component:NotfoundComponent},
  {path:"**",redirectTo:"notfound"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
