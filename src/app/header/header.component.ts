import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // EventListener hinzufügen, um zu prüfen, ob außerhalb des Menüs geklickt wurde
    this.renderer.listen('window', 'click', (event: Event) => {
      const targetElement = event.target as HTMLElement;

      // Prüfen, ob der Klick außerhalb des Navbar-Elements und des Togglers erfolgt
      if (
        !this.el.nativeElement.contains(targetElement) &&
        !targetElement.classList.contains('navbar-toggler')
      ) {
        // Prüfen, ob das Menü geöffnet ist (also die Klasse 'show' hat)
        const navbarToggler = document.querySelector('.navbar-collapse');
        const toggleButton = document.querySelector('.navbar-toggler');

        if (navbarToggler && navbarToggler.classList.contains('show') && toggleButton) {
          // Klicke den Hamburger-Button simuliert, um das Menü zu schließen
          (toggleButton as HTMLElement).click();
        }
      }
    });
  }

  // Methode zum Ausloggen des Benutzers
  logout() {
    localStorage.removeItem('access_token');  // Token entfernen
    window.location.href = '/login';  // Leite zur Login-Seite weiter
  }
}
