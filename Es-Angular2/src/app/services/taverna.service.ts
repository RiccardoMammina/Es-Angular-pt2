import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { find } from 'rxjs/operators'
import { IBeer, Type } from '../interfaces/beer';

@Injectable({
  providedIn: 'root'
})
export class TavernaService {
beers:IBeer[] = [
  {
    id:1,
    type: Type.medium,
    name: 'Corona',
    price: 4
  },
  {
    id:2,
    type: Type.small,
    name: 'Ichnusa',
    price: 3
  },
  {
    id:3,
    type: Type.medium,
    name: 'Peroni',
    price: 2
  },
  {
    id:4,
    type: Type.small,
    name: 'Du Demon',
    price: 5
  },
  {
    id:5,
    type: Type.medium,
    name: 'Moretti',
    price: 1
  },
  {
    id:6,
    type: Type.small,
    name: 'Messina',
    price: 4
  },
  {
    id:7,
    type: Type.medium,
    name: 'Heineken',
    price: 2
  },
  {
    id:8,
    type: Type.small,
    name: 'Ceres',
    price: 3
  },
  {
    id:9,
    type: Type.medium,
    name: 'Nastro Azzurro',
    price: 2
  },
  {
    id:10,
    type: Type.small,
    name: 'Tuborg',
    price: 3
  }
];

private beers$ = from(this.beers);

  constructor() { }

  returnDataBeer(): Observable<IBeer> {
    return this.beers$;
  }

  // findBeerById(idBeer: number): Observable<IBeer | undefined> {
  //   return this.beers$.pipe(find(beer => beer.id == idBeer))
  // }

  findBeer(beerName: string, beerType: string): Observable<IBeer | undefined> {
    return this.beers$.pipe(find(beer => beer.name == beerName && beer.type == beerType))
  }


}
