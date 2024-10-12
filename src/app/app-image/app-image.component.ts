import { Component } from '@angular/core';
import confetti from 'canvas-confetti';  // Importiere die Konfetti-Bibliothek

@Component({
  selector: 'app-app-image',
  standalone: true,  // Diese Zeile macht die Komponente zu einer Standalone-Komponente
  templateUrl: './app-image.component.html',
  styleUrls: ['./app-image.component.css']
})
export class AppImageComponent {
  clickCount: number = 0;  // Zählt die Klicks
  isWaiting: boolean = false;  // Flag für die Wartezeit nach 4 Klicks
  clickTimeout: any;  // Timeout für die Klicks innerhalb von 1 Sekunde

  // Funktion, die Konfetti abfeuert, wenn das Bild geklickt wird
  triggerConfetti() {
    if (this.isWaiting) {
      // Wenn die Wartezeit aktiv ist, beende die Funktion
      return;
    }

    // Erhöhe die Klick-Zählung
    this.clickCount++;

    // Überprüfe, ob es der erste Klick ist, um den Timeout zu starten
    if (this.clickCount === 1) {
      this.clickTimeout = setTimeout(() => {
        // Setze den Klick-Zähler nach 1 Sekunde zurück, wenn keine 4 Klicks erreicht wurden
        this.clickCount = 0;
      }, 1000);
    }

    // Wenn 4 Klicks innerhalb von 1 Sekunde, dann Konfetti und Wartezeit
    if (this.clickCount >= 4) {
      clearTimeout(this.clickTimeout);  // Timeout abbrechen
      this.isWaiting = true;

      // Löst die Konfetti-Animation aus
      confetti({
        particleCount: 100,    // Anzahl der Konfettiteile
        spread: 70,            // Streuung des Konfettis
        origin: { y: 0.6 }     // Startpunkt des Konfettis (leicht von oben)
      });

      // Warte 1 Sekunde, bevor weitere Klicks erlaubt sind
      setTimeout(() => {
        this.isWaiting = false;
        this.clickCount = 0;  // Setze die Klick-Zählung zurück
      }, 1000);
    } else {
      // Löst die Konfetti-Animation bei jedem Klick aus (außer in der Wartezeit)
      confetti({
        particleCount: 100,    // Anzahl der Konfettiteile
        spread: 70,            // Streuung des Konfettis
        origin: { y: 0.6 }     // Startpunkt des Konfettis (leicht von oben)
      });
    }
  }
}
