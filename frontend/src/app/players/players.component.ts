import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../players.service';
import { Router } from '@angular/router'; // Asegúrate de importar el Router

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: any[] = [];
  loading: boolean = true;
  currentPage: number = 1;
  limit: number = 21; 
  selectedPlayer: any = null;  // Jugador seleccionado para ver detalles

  constructor(private playerService: PlayerService, private router: Router) {} // Inyecta el Router

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers() {
    this.loading = true;
    this.playerService.getPlayers(this.limit, this.currentPage).subscribe({
      next: (data) => {
        console.log('Jugadores cargados:', data);  
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

  // Función para seleccionar un jugador
  selectPlayer(player: any): void {
    this.selectedPlayer = player;
  }

  // Función para cerrar la vista de detalle
  deselectPlayer(): void {
    this.selectedPlayer = null;
  }

  // Redirige al componente de edición
  editPlayer(playerId: number): void {
    this.router.navigate(['/edit-player', playerId]); // Redirige al componente de edición
  }
}
