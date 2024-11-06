import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: any[] = [];
  loading: boolean = true;
  currentPage: number = 1;
  limit: number = 9; // Mostrar 9 jugadores por página

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers() {
    this.loading = true;
    this.playerService.getPlayers(this.limit, this.currentPage).subscribe({
      next: (data) => {
        this.players = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar los jugadores', err);
        this.loading = false;
      }
    });
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPlayers();
    }
  }

  nextPage(): void {
    this.currentPage++;
    this.loadPlayers();
  }
}

