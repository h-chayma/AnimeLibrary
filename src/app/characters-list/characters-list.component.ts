import { Component } from '@angular/core';
import { AnimeService } from '../service/anime.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.css'
})
export class CharactersListComponent {
  charactersList: any;
  loading: boolean = true;

  constructor(private animeService: AnimeService) { }

  ngOnInit() {
    this.animeService.getCharactersList().subscribe((data) => {
      this.charactersList = data;
      this.loading = false;
    });
  }
}
