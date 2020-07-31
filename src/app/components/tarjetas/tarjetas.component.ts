import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  verArtista(item: any): any{
    console.log(item);
    let artistaId: any;
    if ( item.type === 'artist'){
      artistaId = item.id;
    }else{
      artistaId = item.artists[0].id;
    }
    console.log(artistaId);
    this.router.navigate(['/artist', artistaId]);

  }

  constructor(private router: Router) { }

}
