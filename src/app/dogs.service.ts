import { IDog } from './dog';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DogsService {

  private _url = '../assets/data/dogs.json';

  constructor(private http: HttpClient) { }

  getDogs(): Observable<IDog[]> {
    return this.http.get<IDog[]>(this._url);
  }

}


// TODO: Come up with a better name to this service!

