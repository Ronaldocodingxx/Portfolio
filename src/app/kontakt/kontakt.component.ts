import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';  // Importiere HeaderComponent
import { FooterComponent } from '../footer/footer.component';  // Importiere FooterComponent
import { VisitenkarteComponent } from '../visitenkarte/visitenkarte.component';  // Importiere die VisitenkarteComponent

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, VisitenkarteComponent],  // Füge die Visitenkarten-Komponente hinzu
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent {

}
