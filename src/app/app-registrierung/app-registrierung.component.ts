import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import confetti from 'canvas-confetti';  // Importiere die Konfetti-Bibliothek

@Component({
  selector: 'app-registrierung',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app-registrierung.component.html',
  styleUrls: ['./app-registrierung.component.css']
})
export class AppRegistrierungComponent {
  email: string = '';  // Variable für die E-Mail-Adresse
  showPopup: boolean = false;  // Flag für die Anzeige des Popups

  @ViewChild('okButton') okButton!: ElementRef;  // Zugriff auf den OK-Button

  // Funktion, die ausgeführt wird, wenn das Formular abgesendet wird
  onSubmit() {
    if (this.email) {
      this.email = '';  // Leere das Eingabefeld
      this.showPopup = true;  // Zeige das Popup an
      this.triggerConfetti();  // Löst die Konfetti-Animation aus

      // Setze Fokus auf den OK-Button, sobald das Popup angezeigt wird
      setTimeout(() => {
        if (this.okButton) {
          this.okButton.nativeElement.focus();
        }
      }, 0);
    }
  }

  // Funktion zum Schließen des Popups
  closePopup() {
    this.showPopup = false;
  }

  // Listener für die Enter-Taste, wenn das Popup geöffnet ist
  @HostListener('document:keydown.enter', ['$event'])
  handleEnterKey(event: KeyboardEvent) {
    if (this.showPopup) {
      this.closePopup();  // Schließe das Popup bei Enter-Taste
    }
  }

  // Konfetti-Animation auslösen
  triggerConfetti() {
    confetti({
      particleCount: 100,    // Anzahl der Konfettiteile
      spread: 70,            // Streuung des Konfettis
      origin: { y: 0.6 }     // Startpunkt des Konfettis (leicht von oben)
    });
  }
}
