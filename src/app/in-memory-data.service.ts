import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const winkels = [
      {naam: "", adres: "", post: null, gemeente: "", tel: "", manager: ""},
      {naam: "De fruitmand", adres: "steenstraat 34", post: 8000, gemeente: "Brugge", tel: "050342218", manager: "Francine Lapoule"},
      {naam: "Jos & Anneke", adres: "visserijstraat 1", post: 8400, gemeente: "Oostende", tel: "059463689", manager: "Jos Leman"},
      {naam: "Groene vingers", adres: "hoogstraat 108", post: 9000, gemeente: "Gent", tel: "091342218"},
      {naam: "De buurtwinkel", adres: "die laene 22", post: 2000, gemeente: "Antwerpen", tel: "0230342218", manager: "Bert Simoens"}
    ];
    const groenten = [
      {naam: "", eenheidsprijs: null, eenheid: ""},
      {naam: "aardappelen", eenheidsprijs: 0.95, eenheid: "kg"},
      {naam: "avocado", eenheidsprijs: 2.69, eenheid: "stuk"},
      {naam: "bloemkool", eenheidsprijs: 1.93, eenheid: "stuk"},
      {naam: "brocoli", eenheidsprijs: 1.29, eenheid: "stuk"},
      {naam: "champignons", eenheidsprijs: 0.89, eenheid: "250g"},
      {naam: "chinese kool", eenheidsprijs: 1.59, eenheid: "stuk"},
      {naam: "groene kool", eenheidsprijs: 1.69, eenheid: "stuk"},
      {naam: "knolselder", eenheidsprijs: 1.29, eenheid: "stuk"},
      {naam: "komkommer", eenheidsprijs: 2.49, eenheid: "stuk"},
      {naam: "kropsla", eenheidsprijs: 1.69, eenheid: "stuk"},
      {naam: "paprika", eenheidsprijs: 0.89, eenheid: "net"},
      {naam: "prei", eenheidsprijs: 2.99, eenheid: "bundel"},
      {naam: "princessenbonen", eenheidsprijs: 1, eenheid: "250g"},
      {naam: "rapen", eenheidsprijs: 0.99, eenheid: "bundel"},
      {naam: "rode kool", eenheidsprijs: 1.39, eenheid: "stuk"},
      {naam: "sla iceberg", eenheidsprijs: 1.49, eenheid: "stuk"},
      {naam: "spinazie vers", eenheidsprijs: 1.89, eenheid: "300g"},
      {naam: "sjalot", eenheidsprijs: 0.99, eenheid: "500g"},
      {naam: "spruiten", eenheidsprijs: 1.86, eenheid: "kg"},
      {naam: "trostomaat", eenheidsprijs: 2.99, eenheid: "500g"},
      {naam: "ui", eenheidsprijs: 0.89, eenheid: "kg"},
      {naam: "witloof 1ste keus", eenheidsprijs: 1.49, eenheid: "700g"},
      {naam: "wortelen", eenheidsprijs: 2.59, eenheid: "kg"},
      {naam: "courgetten", eenheidsprijs: 1.5, eenheid: "stuk"}
    ]
    return {winkels, groenten};
  }
}
