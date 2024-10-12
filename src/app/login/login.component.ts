import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component'; // Importiere die Footer-Komponente
import { LoginFormularComponent } from '../login-formular/login-formular.component'; // Importiere das Login-Formular
import { HeaderComponent } from '../header/header.component'; // Importiere die Header-Komponente
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Für Backend-Anfragen
import { Router } from '@angular/router'; // Router für Navigation nach Login

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, LoginFormularComponent, HeaderComponent], // Füge Header, Footer und Login-Formular hinzu
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) {}

  // Methode, um das Benutzerprofil abzurufen, wenn der Nutzer eingeloggt ist
  getUserProfile() {
    const token = localStorage.getItem('access_token'); // Token aus localStorage abrufen
    if (!token) {
      console.error('Kein Token gefunden, Benutzer ist nicht eingeloggt.');
      return;
    }
  
    // HTTP GET-Anfrage, um Benutzerdaten zu holen
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    this.http.get('http://localhost:3001/auth/profile', { headers }).subscribe(
      (response: any) => {
        console.log('Benutzerprofil abgerufen:', response);
        // Benutzername direkt aus dem response-Objekt auslesen
        if (response && response.username) {
          console.log('Eingeloggter Benutzername:', response.username); // Benutzername in der Konsole ausgeben
        } else {
          console.error('Benutzername nicht gefunden im Antwortobjekt.');
        }
      },
      (error) => {
        console.error('Fehler beim Abrufen des Benutzerprofils:', error);
      }
    );
  }
  
}