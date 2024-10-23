import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from '../service/anime.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrl: './artist-details.component.css'
})
export class ArtistDetailsComponent {
  artistDetails: any;
  artistImages: any;
  artistId: string = '';
  count: number = 0;

  constructor(private animeService: AnimeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.artistId = params['id'];

      this.animeService.getArtistById(this.artistId).subscribe((data) => {
        this.artistDetails = data;
      });

      this.animeService.getArtistImages(this.artistId).subscribe((data) => {
        this.artistImages = data;
        this.count = data.count;
      });
    });
  }

  getLinkIcon(url: string): string {
    if (url.includes('pixiv.net')) {
      return '<i class="fab fa-pinterest"></i><i class="fab fa-pinterest"></i>';
    } else if (url.includes('twitter.com')) {
      return '<i class="fab fa-twitter"></i><i class="fab fa-twitter"></i>';
    } else if (url.includes('fanbox.cc')) {
      return '<i class="fab fa-foursquare"></i><i class="fab fa-foursquare"></i>';
    } else {
      return '<i class="fas fa-link"></i><i class="fas fa-link"></i>';
    }
  }

  convertOctetsToKilobytes(octets: number) {
    if (typeof octets !== 'number' || isNaN(octets)) {
      return 'Invalid input';
    }
    return (octets / 1024).toFixed(2) + ' KB';
  }
}
