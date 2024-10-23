import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ImagesListComponent } from './images-list/images-list.component';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { AboutComponent } from './about/about.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharactersListComponent } from './characters-list/characters-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ImagesListComponent,
    ArtistsListComponent,
    ImageDetailsComponent,
    ArtistDetailsComponent,
    AboutComponent,
    CharacterDetailsComponent,
    CharactersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
