import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from '../service/anime.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent {
  characterDetails: any = {};
  characterImages: any[] = [];
  visibleImages: any[] = [];
  increment: number = 4;

  constructor(private animeService: AnimeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const characterId = params['id'];

      this.animeService.getCharacterById(characterId).subscribe((data) => {
        this.characterDetails = data;
      });

      this.animeService.getCharacterImages(characterId).subscribe((data) => {
        this.characterImages = data.items;
        this.showMoreImages();
      });
    });
  }

  displayField(field: any, fallbackMessage: string): string {
    if (Array.isArray(field)) {
      return field.length > 0 ? field.join(', ') : fallbackMessage;
    } else if (field) {
      return field;
    } else {
      return fallbackMessage;
    }
  }

  showMoreImages() {
    const newItems = this.characterImages.slice(this.visibleImages.length, this.visibleImages.length + this.increment);
    this.visibleImages = [...this.visibleImages, ...newItems];
  }

  isLoadMoreVisible(): boolean {
    return this.visibleImages.length < this.characterImages.length;
  }
}
