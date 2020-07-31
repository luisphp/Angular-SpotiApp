import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTraks: any[] = [];
  loading: boolean;

  constructor( private router: ActivatedRoute, private spotify: SpotifyService ) {
    this.loading = true;
    this.router.params.subscribe(params => {
      console.log(params);

      this.getArtista(params.id);
      this.getTopTracks(params.id);

      // Remover el loading del artista
      this.loading = false;
    });

  }

  ngOnInit(): void {
  }

  getArtista(termino: string): any{

    this.spotify.getArtista(termino)
    .subscribe((artista: any) => {
      console.log('Nombre del artista: ', artista);
      this.artista = artista;
    });
  }

  getTopTracks(id: string): any{
    this.spotify.getTopTracks(id)
    .subscribe((topTracks: any) => {
      console.log('Estos son los temas más sonados de este artista: ', topTracks);
      this.topTraks = topTracks;
    });
  }

}
