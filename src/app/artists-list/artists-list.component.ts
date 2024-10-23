import { Component } from '@angular/core';
import { AnimeService } from '../service/anime.service';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrl: './artists-list.component.css'
})
export class ArtistsListComponent {
  artistsList: any;
  loading: boolean = true;

  constructor(private animeService: AnimeService) { }

  getLinkIcon(url: string): string {
    if (url.includes('pixiv.net')) {
      return '<i class="fab fa-pinterest"></i>';
    } else if (url.includes('twitter.com')) {
      return '<i class="fab fa-twitter"></i>';
    } else if (url.includes('fanbox.cc')) {
      return '<i class="fab fa-foursquare"></i>';
    } else {
      return '<i class="fas fa-link"></i>';
    }
  }

  ngOnInit() {
    this.animeService.getArtistsList().subscribe((data) => {
      this.artistsList = data;
      this.loading = false;
    });
  }
}
