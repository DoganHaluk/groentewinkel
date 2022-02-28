import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Winkel} from "./winkel";
import {Groente} from "./groente";
import {Bestellijn} from "./bestellijn";

@Injectable({providedIn: 'root'})
export class BestelformulierService {

  private winkelsUrl = 'api/winkels';
  private groentenUrl = 'api/groenten';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getWinkels():Observable<Winkel[]>{
    return this.http.get<Winkel[]>(this.winkelsUrl)
  }

  getGroenten():Observable<Groente[]>{
    return this.http.get<Groente[]>(this.groentenUrl)
  }
}
