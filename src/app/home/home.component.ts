import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';  // Importiere die HeaderComponent
import { AboutComponent } from '../about/about.component';    // Importiere die AboutComponent
import { IconComponent } from '../icon/icon.component';      // Importiere die IconComponent
import { FooterComponent } from '../footer/footer.component'; // Importiere die FooterComponent
import { EmailInvitationComponent } from '../email-invitation/email-invitation.component'; // Importiere die EmailInvitationComponent

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, IconComponent, FooterComponent, EmailInvitationComponent],  // Alle Komponenten importieren
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
 