import { Component } from '@angular/core';
import { AnimeService } from '../service/anime.service';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrl: './images-list.component.css'
})
export class ImagesListComponent {
  imagesList: any;

  constructor(private animeService: AnimeService) { }

  ngOnInit() {
    this.animeService.getImagesList().subscribe((data) => {
      this.imagesList = data;
      this.initLoadMore();
    });
  }

  convertOctetsToKilobytes(octets: number) {
    if (typeof octets !== 'number' || isNaN(octets)) {
      return 'Invalid input';
    }
    return (octets / 1024).toFixed(2) + ' KB';
  }

  initLoadMore() {
    $(".load-more .item").slice(0, 4).show();
    $(".blog-area.load-more .item").slice(0, 6).show();

    $("#load-btn").on('click', (e) => {
      e.preventDefault();

      $(".load-more .item:hidden").slice(0, 4).slideDown();
      $(".blog-area.load-more .item:hidden").slice(0, 6).slideDown();

      if ($(".load-more .item:hidden").length === 0) {
        $("#load-btn").fadeOut('slow');
      }
    });
  }
}
