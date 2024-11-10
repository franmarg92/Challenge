import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from '../players.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent {
  playerForm: FormGroup;
  message: string | null = null;  // Para mostrar el mensaje de éxito

  formFields = [
    { name: 'fifa_version', label: 'FIFA Version', placeholder: 'FIFA Version', type: 'text' },
    { name: 'fifa_update', label: 'FIFA Update', placeholder: 'FIFA Update', type: 'text' },
    { name: 'player_face_url', label: 'Player Face URL', placeholder: 'Player Face URL', type: 'text' },
    { name: 'long_name', label: 'Long Name', placeholder: 'Long Name', type: 'text' },
    { name: 'player_positions', label: 'Player Positions', placeholder: 'Player Positions', type: 'text' },
    { name: 'club_name', label: 'Club Name', placeholder: 'Club Name', type: 'text' },
    { name: 'nationality_name', label: 'Nationality', placeholder: 'Nationality', type: 'text' },
    { name: 'overall', label: 'Overall', placeholder: 'Overall', type: 'number' },
    { name: 'potential', label: 'Potential', placeholder: 'Potential', type: 'number' },
    { name: 'value_eur', label: 'Value EUR', placeholder: 'Value EUR', type: 'number' },
    { name: 'wage_eur', label: 'Wage EUR', placeholder: 'Wage EUR', type: 'number' },
    { name: 'age', label: 'Age', placeholder: 'Age', type: 'number' },
    { name: 'height_cm', label: 'Height (cm)', placeholder: 'Height (cm)', type: 'number' },
    { name: 'weight_kg', label: 'Weight (kg)', placeholder: 'Weight (kg)', type: 'number' },
    { name: 'preferred_foot', label: 'Preferred Foot', placeholder: 'Preferred Foot', type: 'text' },
    { name: 'weak_foot', label: 'Weak Foot', placeholder: 'Weak Foot', type: 'number' },
    { name: 'skill_moves', label: 'Skill Moves', placeholder: 'Skill Moves', type: 'number' },
    { name: 'international_reputation', label: 'International Reputation', placeholder: 'International Reputation', type: 'number' },
    { name: 'work_rate', label: 'Work Rate', placeholder: 'Work Rate', type: 'text' },
    { name: 'body_type', label: 'Body Type', placeholder: 'Body Type', type: 'text' },
    { name: 'pace', label: 'Pace', placeholder: 'Pace', type: 'number' },
    { name: 'shooting', label: 'Shooting', placeholder: 'Shooting', type: 'number' },
    { name: 'passing', label: 'Passing', placeholder: 'Passing', type: 'number' },
    { name: 'dribbling', label: 'Dribbling', placeholder: 'Dribbling', type: 'number' },
    { name: 'defending', label: 'Defending', placeholder: 'Defending', type: 'number' },
    { name: 'physic', label: 'Physic', placeholder: 'Physic', type: 'number' }
  ];

  constructor(private fb: FormBuilder, private playerService: PlayerService) {
    // Definir los campos del formulario
    this.playerForm = this.fb.group({
      fifa_version: ['', Validators.required],
      fifa_update: ['', Validators.required],
      player_face_url: ['', Validators.required],
      long_name: ['', Validators.required],
      player_positions: ['', Validators.required],
      club_name: ['', Validators.required],
      nationality_name: ['', Validators.required],
      overall: [0, Validators.required],
      potential: [0, Validators.required],
      value_eur: [0, Validators.required],
      wage_eur: [0, Validators.required],
      age: [0, [Validators.required, Validators.min(16)]],
      height_cm: [0, Validators.required],
      weight_kg: [0, Validators.required],
      preferred_foot: ['', Validators.required],
      weak_foot: [0, [Validators.required, Validators.max(5)]],
      skill_moves: [0, [Validators.required, Validators.max(5)]],
      international_reputation: [0, [Validators.required, Validators.max(5)]],
      work_rate: ['', Validators.required],
      body_type: ['', Validators.required],
      pace: [0, Validators.required],
      shooting: [0, Validators.required],
      passing: [0, Validators.required],
      dribbling: [0, Validators.required],
      defending: [0, Validators.required],
      physic: [0, Validators.required]
    });
  }

  // Método para enviar los datos al backend
  onSubmit(): void {
    if (this.playerForm.valid) {
      this.playerService.createPlayer(this.playerForm.value).subscribe({
        next: (response) => {
          console.log('Jugador creado con éxito', response);
          // Mostrar mensaje de éxito
          this.message = 'Jugador creado con éxito';
          // Vaciar el formulario
          this.playerForm.reset();
        },
        error: (error) => {
          console.error('Error al crear jugador:', error);
        }
      });
    }
  }
}
