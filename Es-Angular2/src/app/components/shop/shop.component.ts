import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBeer } from 'src/app/interfaces/beer';
import { TavernaService } from 'src/app/services/taverna.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  birah$!: Observable<IBeer | undefined>;
  nomeBirra!:string;
  grandezzaBirra!:string

  constructor( public beerService: TavernaService) { }

  birre:IBeer[] = this.beerService.beers;

  ngOnInit(): void {
  }
    cliccato() {
      this.birah$ = this.beerService.findBeer(this.nomeBirra, this.grandezzaBirra)
    }
  }

