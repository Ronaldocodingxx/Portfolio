import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-regformular',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './regformular.component.html',
  styleUrls: ['./regformular.component.css']
})
export class RegformularComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  username: string = '';
  showPopup: boolean = false;

  @ViewChild('okButton') okButton!: ElementRef;

  constructor(private http: HttpClient) {}

  // Methode zum Absenden des Formulars
  onSubmit(event: Event) {
    // Verhindere das Absenden, wenn das Popup aktiv ist
    if (this.showPopup) {
      event.preventDefault();
      return;
    }

    // Frontend-Validierung
    if (!this.isValidEmail(this.email)) {
      alert('Bitte gib eine gültige E-Mail-Adresse ein.');
      return;
    }

    if (this.password.length < 8) {
      alert('Das Passwort muss mindestens 8 Zeichen lang sein.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Die Passwörter stimmen nicht überein. Bitte überprüfe sie.');
      return;
    }

    if (!this.username || this.username.trim().length < 3) {
      alert('Der Benutzername muss mindestens 3 Zeichen lang sein.');
      return;
    }

    const userData = {
      email: this.email,
      password: this.password,
      username: this.username
    };

    // HTTP-POST-Anfrage an das Backend
    this.http.post('http://localhost:3001/auth/register', userData)
      .subscribe(response => {
        console.log('Server-Antwort:', response);
        this.showPopup = true;  // Popup anzeigen
        setTimeout(() => {
          if (this.okButton) {
            this.okButton.nativeElement.focus();
          }
        }, 0);
      }, error => {
        console.error('Fehler bei der Registrierung:', error);
      });
  }

  // Funktion zur E-Mail-Validierung
  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Funktion zum Schließen des Popups
  closePopup() {
    this.showPopup = false;
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.username = '';
  }

  // Listener für Enter-Taste
  @HostListener('document:keydown.enter', ['$event'])
  handleEnterKey(event: KeyboardEvent) {
    // Wenn das Popup aktiv ist, schließe es bei Enter
    if (this.showPopup) {
      this.closePopup();
      event.preventDefault();  // Verhindert, dass das Formular erneut gesendet wird
    }
  }
}
