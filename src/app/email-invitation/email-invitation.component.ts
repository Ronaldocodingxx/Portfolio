import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importiere FormsModule für ngModel
import { CommonModule } from '@angular/common'; // Importiere CommonModule für ngIf

@Component({
  selector: 'app-email-invitation',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Füge FormsModule und CommonModule hinzu
  templateUrl: './email-invitation.component.html',
  styleUrls: ['./email-invitation.component.css']
})
export class EmailInvitationComponent {
  email: string = '';  // Variable zur Speicherung der E-Mail
  submitted: boolean = false;  // Variable zur Überprüfung der Einreichung

  onSubmit() {
    // Beispielaktion: E-Mail speichern oder senden
    console.log('E-Mail eingereicht:', this.email);
    this.submitted = true;
    this.email = '';  // Setze das E-Mail-Feld zurück, wenn die Einreichung erfolgreich war
  }
}
