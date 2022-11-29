import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Kdrama } from './kdrama-list/Kdrama';

const URL = "https://62b617a46999cce2e8fee570.mockapi.io/Kdramas";

@Injectable({
  providedIn: 'root'
})
export class KdramaDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Kdrama[]> {
    //esto ddevuelve un observable del arreglo json
    return this.http.get<Kdrama[]>(URL)
      .pipe(
        tap((kdramas: Kdrama[]) => kdramas.forEach(kdrama => kdrama.puntaje = 0))

      );
  }
}
