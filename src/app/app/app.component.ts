import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AppRegistrierungComponent } from '../app-registrierung/app-registrierung.component';
import { AppImageComponent } from '../app-image/app-image.component';  // Importiere die neue Komponente AppImageComponent

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, AppRegistrierungComponent, AppImageComponent],  // Füge HeaderComponent, FooterComponent, AppRegistrierungComponent und AppImageComponent hinzu
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent { }
