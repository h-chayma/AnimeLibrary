import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImagesListComponent } from './images-list/images-list.component';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: ImagesListComponent },
  { path: 'artists', component: ArtistsListComponent },
  { path: 'image/:id', component: ImageDetailsComponent },
  { path: 'artist/:id', component: ArtistDetailsComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
