import {Component, OnInit} from '@angular/core';
import {Winkel} from "../winkel";
import {Groente} from "../groente";
import {BestelformulierService} from "../bestelformulier.service";

@Component({
  selector: 'app-bestelformulier',
  templateUrl: './bestelformulier.component.html',
  styleUrls: ['./bestelformulier.component.css']
})
export class BestelformulierComponent implements OnInit {
  winkels: Winkel[] = [];
  groenten: Groente[] = []

  constructor(private bestelformulierSevice: BestelformulierService) {
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
}
