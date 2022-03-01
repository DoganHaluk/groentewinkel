import {Injectable} from '@angular/core';
import {Bestellijn} from "./bestellijn";
import {Observable, of} from "rxjs";

@Injectable({providedIn: 'root'})
export class WinkelmandjeService {

  bestellijnen: Bestellijn[] = [];

  constructor() {
  }

  getBestellijnen(): Observable<Bestellijn[]> {
    return of(this.bestellijnen);
  }

  addBestellijn(nieuweBestellijn: Bestellijn) {
    for (let bestellijn of this.bestellijnen) {
      if (bestellijn.winkel == nieuweBestellijn.winkel && bestellijn.groente == nieuweBestellijn.groente) {
        bestellijn.stuk += nieuweBestellijn.stuk;
        bestellijn.totaal = bestellijn.stuk * bestellijn.prijs;
        return;
      }
    }
    this.bestellijnen.push(nieuweBestellijn);
  }

  berekenTotaalBedrag(): number {
    let totaalBedrag: number = 0;
    for (let i = 0; i < this.bestellijnen.length; i++) {
      totaalBedrag += this.bestellijnen[i].totaal;
    }
    return totaalBedrag;
  }
}
