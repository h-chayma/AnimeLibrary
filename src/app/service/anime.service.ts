import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private apiUrl = 'https://api.nekosapi.com/v3';

  constructor(private http: HttpClient) { }

  getRandomImagesList(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/images/random?rating=safe");
  }

  getImagesList(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/images?rating=safe");
  }

  getImageById(imageId: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/images/" + imageId);
  }

  getArtistsList(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/artists");
  }

  getArtistById(artistId: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/artists/" + artistId);
  }

  getArtistImages(artistId: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/artists/" + artistId + "/images?rating=safe");
  }
  
}
