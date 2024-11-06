import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = 'http://localhost:3000/players'; // URL de tu backend para jugadores

  constructor(private http: HttpClient) {}

  getPlayers(limit: number = 9, page: number = 1): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?limit=${limit}&page=${page}`);
  }

 // Método para obtener un jugador por ID
 getPlayerById(id: number): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/${id}`);
}

// Método para obtener jugadores por equipo
getPlayersByTeam(teamName: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}?team=${teamName}`);
}

// Método para obtener jugadores por nombre
getPlayersByName(playerName: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}?name=${playerName}`);
}



}
