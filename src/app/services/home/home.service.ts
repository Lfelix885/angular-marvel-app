import { Data, RootObject, CharacterResults } from './../../models/home';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  baseURL: string = 'https://gateway.marvel.com/v1/public';
  urlParams: string =
    '?ts=1&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=bd4b447a65ef5d6b174f87cf9db6d2db';

  params: Object = {};

  constructor(private http: HttpClient) {}

  getPersonagens(limit = 0, offset = 0): Observable<RootObject<Data<any>>> {
    return this.http.get<RootObject<Data<any>>>(this.baseURL + '/characters', {
      params: {
        ts: 1,
        apikey: 'f24b38642fd73f39b93061863f4eb855',
        hash: '71b093518d2a33f9c358470e204c3a09',
        limit: limit,
        offset: offset,
      },
    });
  }

  getPersonagemPeloId(id: any): Observable<RootObject<Data<CharacterResults>>> {
    return this.http.get<RootObject<Data<CharacterResults>>>(
      this.baseURL + '/characters/' + id,
      {
        params: {
          ts: 1,
          apikey: 'f24b38642fd73f39b93061863f4eb855',
          hash: '71b093518d2a33f9c358470e204c3a09',
        },
      }
    );
  }

  getQuadrinhos(id: any):Observable<RootObject<Data<CharacterResults>>> {
    return this.http.get<RootObject<Data<CharacterResults>>>(this.baseURL + '/characters/' + id + '/comics',{
      params: {
        ts: 1,
        apikey: 'f24b38642fd73f39b93061863f4eb855',
        hash: '71b093518d2a33f9c358470e204c3a09',
      },
    });
  }
}
