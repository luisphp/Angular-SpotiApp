import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // paises: any[] = [];
  // constructor(private http: HttpClient) {
  //   console.log('Constructor');
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //   .subscribe((resp: any) => {
  //     console.log(resp);
  //     this.paises = resp;
  //   });
  //  }
  // Spotify credentials:
  // client_ID = 'd6b55734aa3f4b49af89ae8023b6c69e';
  // client_secret = '4659ca881ead4eed81c45197f071db34'

  nuevasCanciones: any = [];

  loading: boolean;

  error = false;
  mensajeError: string;

  constructor( private spotify: SpotifyService ){
   this.loading = true;
   this.spotify.getNewReleases()
   .subscribe( ( data: any ) => {
    console.log(data);
    // this.nuevasCanciones = data.albums.items;
    this.nuevasCanciones = data;
    this.loading = false;
   }, ( errorServicio: any) => {
    this.error = true;
    console.log(errorServicio.error.error.message);
    this.mensajeError = errorServicio.error.error.message;
    this.loading = false;
   });

  //  this.spotify.getToken()
  //  .subscribe((data: any) => {
  //    console.log('El token deberia ser: ', data);
  //  });
  }

  ngOnInit(): void {

  }

}
