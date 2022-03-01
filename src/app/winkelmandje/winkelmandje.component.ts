import {Component, OnInit} from '@angular/core';
import {Bestellijn} from "../bestellijn";
import {WinkelmandjeService} from "../winkelmandje.service";

@Component({
  selector: 'app-winkelmandje',
  templateUrl: './winkelmandje.component.html',
  styleUrls: ['./winkelmandje.component.css']
})
export class WinkelmandjeComponent implements OnInit {

  totaalBedrag: number = 0;
  bestellijnen: Bestellijn[] = [];
  aantalClicks: number = 1;
  munteenheidOpKnop: string = 'USD';
  munteenheidInTabel: string = 'EUR';

  constructor(private winkelmandjeService: WinkelmandjeService) {
  }

  ngOnInit(): void {
    this.getBestellijnen();
  }

  getBestellijnen(): void {
    this.winkelmandjeService.getBestellijnen()
      .subscribe(bestellijnen => this.bestellijnen = bestellijnen);
  }

  getTotaalbedrag(): number {
    return this.winkelmandjeService.berekenTotaalBedrag()
  }

  converteer() {
    this.aantalClicks++;
    if (this.aantalClicks % 2 == 0) {
      this.munteenheidOpKnop = 'EUR';
      this.munteenheidInTabel = 'USD';
      for (let i = 0; i < this.bestellijnen.length; i++) {
        this.bestellijnen[i].prijs *= 1.1217;
        this.bestellijnen[i].totaal *= 1.1217;
      }
      this.totaalBedrag *= 1.1217;
    } else {
      this.munteenheidOpKnop = 'USD';
      this.munteenheidInTabel = 'EUR';
      for (let i = 0; i < this.bestellijnen.length; i++) {
        this.bestellijnen[i].prijs *= 0.8915;
        this.bestellijnen[i].totaal *= 0.8915;
      }
      this.totaalBedrag *= 0.8915;
    }
  }
}
