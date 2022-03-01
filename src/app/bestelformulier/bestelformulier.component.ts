import {Component, OnInit} from '@angular/core';
import {Winkel} from "../winkel";
import {Groente} from "../groente";
import {Bestellijn} from "../bestellijn";
import {BestelformulierService} from "../bestelformulier.service";
import {WinkelmandjeService} from "../winkelmandje.service";

@Component({
  selector: 'app-bestelformulier',
  templateUrl: './bestelformulier.component.html',
  styleUrls: ['./bestelformulier.component.css']
})
export class BestelformulierComponent implements OnInit {
  winkels: Winkel[] = [];
  groenten: Groente[] = [];
  totaalBedrag: number = 0;
  gekozen = new Bestellijn("", "", 0, 0, 0);

  constructor(
    private bestelformulierSevice: BestelformulierService,
    private winkelmandjeService: WinkelmandjeService
  ) {
  }

  ngOnInit(): void {
    this.getWinkels();
    this.getGroenten();
  }

  getWinkels(): void {
    this.bestelformulierSevice.getWinkels()
      .subscribe(winkels => this.winkels = winkels);
  }

  getGroenten(): void {
    this.bestelformulierSevice.getGroenten()
      .subscribe(groenten => this.groenten = groenten);
  }

  bestel() {
    for (let groente of this.groenten) {
      if (groente.naam == this.gekozen.groente) {
        this.gekozen.prijs = groente.eenheidsprijs;
      }
    }
    this.gekozen.totaal = this.gekozen.prijs * this.gekozen.stuk;
    this.winkelmandjeService.addBestellijn(this.gekozen);
    this.gekozen = new Bestellijn("", "", 0, 0, 0);
  }
}
