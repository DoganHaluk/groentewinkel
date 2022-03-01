import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Winkel} from "./winkel";
import {Groente} from "./groente";

@Injectable({providedIn: 'root'})
export class BestelformulierService {

  private winkelsUrl = 'api/winkels';
  private groentenUrl = 'api/groenten';

  constructor(private http: HttpClient) {
  }

  getWinkels():Observable<Winkel[]>{
    return this.http.get<Winkel[]>(this.winkelsUrl)
  }

  getGroenten():Observable<Groente[]>{
    return this.http.get<Groente[]>(this.groentenUrl)
  }
}
