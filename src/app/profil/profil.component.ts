import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProfileHeaderComponent } from '../profile-header/profile-header.component';  // Import der neuen Komponente

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ProfileHeaderComponent],  // ProfileHeaderComponent einbinden
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {}
