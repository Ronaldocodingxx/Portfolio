import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visitenkarte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visitenkarte.component.html',
  styleUrls: ['./visitenkarte.component.css']
})
export class VisitenkarteComponent {
  copiedButton: string = '';  // Variable zum Speichern des kopierten Buttons
  showQRModal: boolean = false;  // Flag für den QR-Code Modal

  // Kopiert den Text in die Zwischenablage und zeigt eine Erfolgsmeldung an
  copyText(content: string, button: string) {
    navigator.clipboard.writeText(content).then(() => {
      this.copiedButton = button;

      // Animation für 1 Sekunde starten
      setTimeout(() => {
        this.copiedButton = '';  // Zurücksetzen des Buttons nach 1 Sekunde
      }, 1000);  // 1000 ms = 1 Sekunde
    }).catch(err => {
      console.error('Fehler beim Kopieren: ', err);
    });
  }

  // Zeigt den QR-Code im Modal an
  showQRCode() {
    this.showQRModal = true;
  }

  // Versteckt den QR-Code im Modal
  hideQRCode() {
    this.showQRModal = false;
  }
}
