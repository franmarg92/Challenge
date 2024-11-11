import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from '../players.service'; 


@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.css'
})



export class PlayerDetailComponent {

  searchForm: FormGroup;
  player: any; 
  errorMessage: string = ''; 
Highcharts: any;

  constructor(private fb: FormBuilder, private playerService: PlayerService) {
    // Formulario para buscar jugador por ID
    this.searchForm = this.fb.group({
      playerId: ['', [Validators.required, Validators.min(1)]]
    });
  }

  // Método para buscar el jugador por ID
  onSearch(): void {
    const playerId = this.searchForm.get('playerId')?.value;
    if (playerId) {
      this.playerService.getPlayerById(playerId).subscribe({
        next: (response) => {
          this.player = response;
          this.errorMessage = ''; 
        },
        error: (error) => {
          console.error('Error al obtener el jugador:', error);
          this.errorMessage = 'No se pudo encontrar el jugador con ese ID';
          this.player = null; 
        }
      });
    }
  }


  

}


