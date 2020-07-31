import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Desde el servicio spotify');
  }

  // elToken: any = '';

  // getToken(): any {
  //   const tokenUrl = 'https://accounts.spotify.com/api/token';

  //   const headers = new HttpHeaders({
  //     grant_type : 'client_credentials',
  //     client_id : 'd6b55734aa3f4b49af89ae8023b6c69e',
  //     client_secret : '4659ca881ead4eed81c45197f071db34'
  //   });
  //   this.elToken = this.http.get(tokenUrl, {headers}).pipe(map((data: any) => {
  //     return data.access_token;
  //   }));
  //   console.log('El token es: ', this.elToken);
  //   return this.http.get(tokenUrl, {headers});
  // }
  llave: string;

  getQuery( query: string ): any{
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({

      Authorization: 'Bearer BQAkUEYZOSyjVgFjRA05YgpXdRB4dFXzYZSDpDl4ASlWKwDMiR1USKMBPOPQOAsGQK0UmznKDv_gbaag1tI'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(): any {
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQAS7aTQydHNyjoFZXduvGgPBbVLd0DMtuAYcmOLJRQ7AxR9fgkVnQ5uANAl34dDlkB1MgJOEOHZNZxj4R8'
    // });
    return this.getQuery('browse/new-releases')
    .pipe( map((data: any) => {
      return data.albums.items;
    }));

    // this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    //         .pipe( map((data: any) => {
    //           return data.albums.items;
    //         }));
  }

  getArtistas( termino: string ): any{
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer BQAS7aTQydHNyjoFZXduvGgPBbVLd0DMtuAYcmOLJRQ7AxR9fgkVnQ5uANAl34dDlkB1MgJOEOHZNZxj4R8'
    // });
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15&offset=5`)
    .pipe( map ( (data: any) => {
      return data.artists.items;
    }));

    // this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15&offset=5`, {headers})
    // .pipe( map ( (data: any) => {
    //   return data.artists.items;
    // }));
  }

  getArtista( termino: string): any {
    return this.getQuery(`artists/${ termino }`);
    // .pipe( map ( (data: any) => {
    //   return data.artists.items;
    // }));
  }

  getTopTracks( id: string): any {
    return this.getQuery(`artists/${ id }/top-tracks?country=ES`)
    .pipe( map ( (data: any) => {
      return data.tracks;
    }));
  }

}