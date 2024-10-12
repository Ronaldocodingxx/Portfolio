import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  isImageLoaded = false;  // Steuert den Ladezustand des Bildes
  imageSrc = '';  // Bildquelle vom Server oder localStorage

  ngOnInit(): void {
    const storedImage = localStorage.getItem('cedricImage');

    if (storedImage) {
      // Bild aus dem localStorage laden und sofort anzeigen
      this.imageSrc = storedImage;
      this.isImageLoaded = true;
    } else {
      // Bild vom Server laden und dann im localStorage speichern
      this.loadImage();
    }
  }

  loadImage(): void {
    const img = new Image();
    img.src = 'assets/cedric.jpg';  // Bildquelle vom Server
    img.onload = () => {
      // Bild als Base64 speichern
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL('image/jpeg');

      // Bild im localStorage speichern
      localStorage.setItem('cedricImage', dataURL);

      // Bildquelle aktualisieren und anzeigen
      this.imageSrc = dataURL;
      this.isImageLoaded = true;  // Ladeanimation beenden und Bild anzeigen
    };
  }
}
