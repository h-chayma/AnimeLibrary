import { Component } from '@angular/core';
import { AnimeService } from '../service/anime.service';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrl: './images-list.component.css'
})
export class ImagesListComponent {
  imagesList: any[] = [];
  visibleImages: any[] = [];
  increment: number = 4;
  loading: boolean = true; 

  constructor(private animeService: AnimeService) { }

  ngOnInit() {
    this.animeService.getImagesList().subscribe(
      (data) => {
        this.imagesList = data.items;
        this.showMoreImages();
        this.loading = false;
      },
      (error) => {
        console.error('Error loading images', error);
        this.loading = false;
      }
    );
  }

  convertOctetsToKilobytes(octets: number) {
    if (typeof octets !== 'number' || isNaN(octets)) {
      return 'Invalid input';
    }
    return (octets / 1024).toFixed(2) + ' KB';
  }

  showMoreImages() {
    const newItems = this.imagesList.slice(this.visibleImages.length, this.visibleImages.length + this.increment);
    this.visibleImages = [...this.visibleImages, ...newItems];
  }

  isLoadMoreVisible(): boolean {
    return this.visibleImages.length < this.imagesList.length;
  }
}
