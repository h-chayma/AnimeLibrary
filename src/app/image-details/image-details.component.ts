import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from '../service/anime.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrl: './image-details.component.css'
})
export class ImageDetailsComponent {

  imageDetails: any;
  imageId: string = '';

  constructor(private animeService: AnimeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.imageId = params['id'];

      this.animeService.getImageById(this.imageId).subscribe((data) => {
        this.imageDetails = data;
      });
    });
  }

  getColorString(color: number[]): string {
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  }

  copyColorCode(color: string): void {
    const inputElement = document.createElement('input');
    inputElement.value = color;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    alert(`Color code '${color}' copied to clipboard.`);
  }

  formatDate(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
}
