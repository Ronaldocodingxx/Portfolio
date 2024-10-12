import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Für ngModel
import { HttpClientModule, HttpClient } from '@angular/common/http'; // HttpClientModule und HttpClient importieren
import { Router } from '@angular/router'; // Für Weiterleitungen nach erfolgreichem Login

@Component({
  selector: 'app-login-formular',
  standalone: true,
  imports: [FormsModule, HttpClientModule], // HttpClientModule hier importieren
  templateUrl: './login-formular.component.html',
  styleUrls: ['./login-formular.component.css']
})
export class LoginFormularComponent {
  usernameOrEmail: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  // Methode für das Absenden des Login-Formulars
  onSubmit() {
    console.log('Login Attempt:', this.usernameOrEmail, this.password);

    // HTTP POST-Anfrage an das Backend senden
    this.http.post('http://localhost:3001/auth/login', {
      usernameOrEmail: this.usernameOrEmail,
      password: this.password
    }).subscribe(
      (response: any) => {
        console.log('Login erfolgreich:', response);
        // Speichere den Token im localStorage
        localStorage.setItem('access_token', response.access_token);
        // Weiterleitung nach erfolgreichem Login
        this.router.navigate(['/protected']);
      },
      (error) => {
        console.error('Login fehlgeschlagen:', error);
        // Fehlerbehandlung hinzufügen, z. B. Fehlermeldung anzeigen
      }
    );
  }
}

