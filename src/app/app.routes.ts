import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app/app.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { RegistrierungComponent } from './registrierung/registrierung.component'; // Importiere die RegistrierungComponent
import { LoginComponent } from './login/login.component'; // Importiere die LoginComponent

// Hier exportieren wir die routes Konstante
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'app', component: AppComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'registrierung', component: RegistrierungComponent }, // Registrierung Route
  { path: 'login', component: LoginComponent }, // Login Route hinzugefügt
  { path: '**', redirectTo: 'home' }
];
