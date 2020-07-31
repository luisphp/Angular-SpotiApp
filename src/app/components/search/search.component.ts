import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
   }

  ngOnInit(): void {
  }

  buscar(termino: string): any {
    this.loading = true;
    console.log(termino);
    this.spotify.getArtistas(termino)
    .subscribe( (data: any ) => {
      console.log('Mostrando el resultado de la busqueda', data);
      this.artists = data;
      this.loading = false;
    });
  }

}
