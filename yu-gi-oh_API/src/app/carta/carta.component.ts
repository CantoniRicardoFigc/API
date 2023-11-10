import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../yu-gi-oh_API.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  cartaSearch !: String;
  obsCard !: Observable<Root>;
  ris !: Root;

  constructor(private http : HttpClient) {}
  
  ricercaApi(cartaCercata : HTMLInputElement) {
    this.cartaSearch = cartaCercata.value;
    this.obsCard = this.http.get<Root>('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=' + this.cartaSearch)
    this.obsCard.subscribe((data : Root)=>(this.ris = (data)))
  }
}
