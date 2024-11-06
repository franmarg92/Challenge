import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        (response) => {
          console.log('Inicio de sesión exitoso', response);
          // Aquí puedes almacenar el token o cualquier otra información
          this.router.navigate(['/players']); // Redirigir a la página de jugadores
        },
        (error) => {
          console.error('Error al iniciar sesión', error);
          // Manejo de errores aquí, por ejemplo, mostrar un mensaje al usuario
        }
      );
    }
  }
}
