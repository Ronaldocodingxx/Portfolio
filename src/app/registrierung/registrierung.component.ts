import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Für ngModel
import { CommonModule } from '@angular/common';  // Für *ngIf und andere Angular-Direktiven
import { HeaderComponent } from '../header/header.component';  // Importiere die HeaderComponent
import { FooterComponent } from '../footer/footer.component';  // Importiere die FooterComponent
import { RegformularComponent } from '../regformular/regformular.component';  // Korrigiere den Importpfad und Klassennamen

@Component({
  selector: 'app-registrierung',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent, RegformularComponent],  // RegformularComponent verwenden
  templateUrl: './registrierung.component.html',
  styleUrls: ['./registrierung.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Optional, falls du Web Components verwendest
})
export class RegistrierungComponent {
  email: string = '';  // E-Mail-Adresse des Nutzers
  showPopup: boolean = false;  // Steuert die Sichtbarkeit des Popups

  // Wird ausgeführt, wenn das Formular abgeschickt wird
  onSubmit() {
    if (this.email) {
      console.log('Registrierte E-Mail:', this.email);  // Ausgabe in der Konsole zur Überprüfung
      this.showPopup = true;  // Popup anzeigen
    }
  }

  // Popup schließen und E-Mail-Eingabefeld zurücksetzen
  closePopup() {
    this.showPopup = false;  // Popup ausblenden
    this.email = '';  // Optional: E-Mail-Feld nach dem Schließen leeren
  }
}
